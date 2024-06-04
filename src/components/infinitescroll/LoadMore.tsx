import { useEffect, useState, useCallback, useRef } from "react";
import { fetchMoreRoutes } from "../../state/routes/routesSlice";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { Spinner } from "../Spinner";

const ITEMS_PER_PAGE = 5;
const LOAD_MORE_DELAY_MS = 800;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
interface Props {
  selectCategory: string;
  selectProvince: string;

}
export const LoadMore = ({ selectCategory = '', selectProvince = '' }: Props) => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(2);

  const { loadingMore, total } = useSelector((state: RootState) => state.routes);
  const [noMorePublication, setNoMorePublication] = useState(false)
  const pagination = useRef(0)
  const loadMoreRoutes = useCallback(async () => {
    console.log('LoadMore')

    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    if (start >= total) {
      setNoMorePublication(true)
      return;
    }
    if (currentPage === pagination.current) return

    pagination.current = currentPage
    await delay(LOAD_MORE_DELAY_MS);
    await dispatch(fetchMoreRoutes({ category: selectCategory, province: selectProvince, desde: start }));
    setCurrentPage(prevPage => prevPage + 1);

  }, [currentPage, dispatch, total]);

  useEffect(() => {
    console.log(inView)
    if (inView && !loadingMore) {
      console.log('first')

      loadMoreRoutes();
    }
  }, [inView, loadingMore, loadMoreRoutes]);

  return (
    <div className=" justify-center items-center flex">
      {loadingMore && (
        <div className="flex justify-center items-center p-4 py-6 col-span-1 sm:col-span-2 md:col-span-3">
          <Spinner />
        </div>
      )}
      <div ref={ref} className="p-1" />
      {noMorePublication && (
        <h2 className="m-2 justify-center items-center ">No hay publicaciones</h2>
      )}

    </div>
  );
};

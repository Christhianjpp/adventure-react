import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
;
import { fetchRoute } from "../state/routes/routesSlice";
import { RouteFull } from "../components/routes/RouteFull";

export const RouterPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { activeRoute, loadingRoute } = useSelector((state: RootState) => state.routes);
    const params = useParams<{ router: string }>();

    useEffect(() => {
        if (!activeRoute && params.router) {
            dispatch(fetchRoute(params.router));
        }
    }, [activeRoute, params.router, dispatch]);

    if (loadingRoute) {
        return <div>Loading...</div>;
    }

    if (activeRoute === null) {
        return <div> No se encontro la publicación</div>;
    }

    return (
        <div className=" flex w-full justify-center pt-10        ">

            <RouteFull route={activeRoute} />
        </div>
    );
};

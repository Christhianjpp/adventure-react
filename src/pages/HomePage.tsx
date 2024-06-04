import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { useEffect, useState } from "react"

import { fetchCategories } from "../state/category/categoriesSlice"
import { province } from "../data/province"

import RoutesListHome from "../components/routes/RoutesListHome"
import { fetchInitialRoutes } from "../state/routes/routesSlice"
import { MenuTop } from "../components/MenuTop"

const HomePage = () => {
    // const { categories, routes } = useSelector((state: RootState) => ({
    //     categories: state.categories,
    //     routes: state.routes,
    // }));

    const [selectCategoryId, setSelectCategoryId] = useState<string>('')
    const [selectProvinceId, setSelectProvinceId] = useState<string>('')

    const { categories, loading } = useSelector((state: RootState) => state.categories)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchInitialRoutes({ category: '', province: '' }))
    }, [dispatch])

    useEffect(() => {
        if (selectCategoryId || selectProvinceId) {
            dispatch(fetchInitialRoutes({ category: selectCategoryId, province: selectProvinceId }))
        }

    }, [selectCategoryId, selectProvinceId, dispatch])
    return (
        <div className=" flex flex-col min-h-dvh  items-center">

            <section
                className=" sticky top-0  bg-white shadow-md z-10  w-full  " >

                {
                    loading
                        ? <div>Loading...</div>
                        : (
                            <>
                                <MenuTop categories={categories} selectId={setSelectCategoryId} />
                                <MenuTop categories={province} selectId={setSelectProvinceId} />
                            </>
                        )

                }

            </section>
            <section className="flex flex-col items-center  ">

                <RoutesListHome selectCategory={selectCategoryId} selectProvince={selectProvinceId} />



            </section>
        </div>
    )
}

export default HomePage
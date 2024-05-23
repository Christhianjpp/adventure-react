import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import adventureApi from "../api/adventureApi"

const getCategories = async () => {
    const resp = await adventureApi.get('/category')
    console.log(resp.data)
}



const HomePage = () => {
    getCategories()
    // const { total, categories } = useSelector((state: RootState) => state.categories)
    // const dispatch = useDispatch()
    return (
        <div>
            {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
        </div>
    )
}
export default HomePage
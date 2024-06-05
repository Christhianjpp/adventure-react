import { useEffect, useState } from "react"
import { ShowMap } from "./ShowMap"
import { ShowPublications } from "./ShowPublications"
import { ShowSave } from "./ShowSave"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../state/store"
import { fetchUserRoutes } from "../../state/auth/authSlice"


const option = [
    {
        title: 'Publicaciones',
        component: 'Publications'
    },
    {
        title: 'Mapa',
        component: 'Mapa'
    },
    {
        title: 'Guardados',
        component: 'Save'
    },

]
export const UserBottom = () => {
    const [selectedOption, setSelectedOption] = useState('Publications')
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchUserRoutes())



    }, [dispatch])
    const renderComponent = () => {
        switch (selectedOption) {
            case 'Publications':
                return <ShowPublications />
            case 'Mapa':
                return <ShowMap />
            case 'Save':
                return <ShowSave />
            default:
                return <ShowPublications />

        }
    }

    return (

        <div className='flex flex-col w-[600px]'>
            <div className='flex justify-between'>

                {
                    option.map(({ title, component }, index) => (
                        <button key={index} className='w-full py-2 bg-white mt-1 shadow-sm hover:bg-neutral-100'
                            onClick={() => setSelectedOption(component)}
                        >

                            {title}</button>
                    ))
                }
            </div>
            <div>
                {renderComponent()}

            </div>
        </div>
    )
}

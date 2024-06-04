
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import { LoadMore } from '../infinitescroll/LoadMore';

import { RoutesList } from '../RoutesList';


interface Props {
    selectCategory: string;
    selectProvince: string;

}
const RoutesListHome = ({ selectCategory, selectProvince }: Props) => {
    const { routes, loading } = useSelector((state: RootState) => state.routes)
    //const [localRoutes, setLocalRoutes] = useState<RouteElement[]>([]);


    // useEffect(() => {
    //     setLocalRoutes((prevRoutes) => [...prevRoutes, ...routes]);
    // }, [routes]);
    // useEffect(() => {
    //     // Actualizamos las rutas locales solo cuando haya nuevas rutas disponibles
    //     if (routes.length > localRoutes.length) {
    //         setLocalRoutes(routes);
    //     }
    // }, [routes, localRoutes]);

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className='bg-gray-100'>

            <RoutesList routes={routes} />
            <LoadMore
                selectCategory={selectCategory}
                selectProvince={selectProvince} />
        </div>
    )
}

export default RoutesListHome
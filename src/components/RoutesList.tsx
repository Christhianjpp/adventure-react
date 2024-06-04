import { RouteElement } from '../interfaces/routeInterface';
import { RouteCard } from './routes/RouteCard';

interface Props {
    routes: RouteElement[];
}
export const RoutesList = ({ routes }: Props) => {
    return (
        <div className=''>
            {
                routes.map((route, index) => (

                    <RouteCard key={route._id} route={route} />

                ))
            }
        </div>
    )
}

import { RouteElement } from '../../interfaces/routeInterface'
import { ChatBox } from '../button/ChatBox';
import { Heart } from '../button/Heart';
import { Save } from '../button/Save';

import { ImageRouteFull } from './ImageRouteFull';
import { AuthRoute } from './full/AuthRoute';

interface Props {
    route: RouteElement;
}
export const RouteFull = ({ route }: Props) => {
    return (
        <div className='flex flex-col gap-5 w-[600px] h-full justify-center items-center'>
            <div>
                <ImageRouteFull imgs={route.imgs} />
                <div className='flex  justify-between m-2 pt-3'>
                    <div className=" flex gap-10 justify-center ">

                        <Heart numLikes={route.numLikes} />
                        <ChatBox />
                        <Save />
                    </div>
                    <AuthRoute auth={route.author} />
                </div>

            </div>

            <div className="flex gap-3 justify-around w-full border-t-2   border-neutral-100 py-4">

                <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="font-light text-sm">Categoría</span>
                    <span className=" font-semibold text-2xl">{route.category.name}</span>
                </div>
                <div className='bg-red-200 border-y-2 border-solid border-neutral-100 border-x-2' />

                <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="font-light text-sm">Provincia</span>
                    <span className=" font-semibold text-2xl">{route.province.name}</span>
                </div>
            </div>
            <div className="flex gap-3 justify-around w-full border-t-2  border-neutral-100 py-4">

                <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="font-light text-sm">Distancia</span>
                    <span className=" font-semibold text-2xl">0000</span>
                </div>
                <div className='bg-red-200 border-y-2 border-solid border-neutral-100 border-x-2' />

                <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="font-light text-sm">Tiempo de llegada</span>
                    <span className=" font-semibold text-2xl">0000</span>
                </div>
            </div>
            <div className='flex w-full  justify-center '>
                <img src={route.imgMap} alt="map" className="object-cover" />
            </div>

        </div>
    )
}

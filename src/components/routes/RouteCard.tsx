import React from "react";
import { RouteElement } from "../../interfaces/routeInterface";

import Moment from 'moment'


import { RouteViewImage } from './RouteViewImage';
import { IconHeartOutline } from "../icons/IconHeartOutline";
import { IconChatBoxOutline } from "../icons/IconChatBoxOutline";
import { IconSave } from "../icons/IconSave";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

interface Props {
    route: RouteElement;

}

export const RouteCard = React.memo((({ route }: Props) => {
    const formattedDate = Moment(route.createdAt).format('LL'); // Ejemplo de formato: 1 de enero de 2020 12:00
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const handleNavigation = () => {
        dispatch({ type: 'routes/setActiveRoute', payload: route })
        navigation(`/router/${route._id}`)
    }
    return (
        <div className=" flex flex-col gap-3 mb-3 shadow-sm pt-5  p-1 w-[600px] h-full  bg-white">
            <div onClick={handleNavigation} className="flex flex-col gap-3 hover:cursor-pointer">

                <div className=" flex pl-2">
                    <img
                        src={route.author.img}
                        alt={route.author.name}
                        onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150' }}
                        className="w-16 h-16 rounded-full"
                    />
                    <div className=" flex items-start flex-col pl-4 my-1">
                        <span className="font-bold">{route.author.name}</span>
                        <div className="flex gap-3 items-center">
                            <span className="font-semibold">{route.province.name}</span>
                            <span className="font-semibold text-green-600">{route.category.name}</span>
                            <span className="font-light text-sm text-gray-500">

                                {formattedDate}


                            </span>
                        </div>
                    </div>

                </div>
                <div className="min-h-80">
                    <RouteViewImage imgs={route.imgs} imgMap={route.imgMap} />
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <div className="flex gap-28">
                    <div className="flex flex-col justify-center items-center">
                        <span>Distancia</span>
                        <span>00</span>

                    </div>
                    <div className="flex flex-col justify-center items-center">

                        <span>Tiempo de llegada</span>
                        <span>00</span>
                    </div>
                </div>
                <div className=" flex gap-20 py-5 ">
                    <IconHeartOutline width={35} height={35} />
                    <IconChatBoxOutline width={35} height={35} />
                    <IconSave width={35} height={35} />

                </div>
            </div>




        </div>
    )
}))

import { useState } from 'react'
import { IconChevronLeft } from '../icons/IconChevronLeft';
import { IconChevronRight } from '../icons/IconChevronRight';

interface Props {
    imgs: string[];
    imgMap?: string;
    from?: string;
}

export const RouteViewImage = ({ imgs, imgMap, from }: Props) => {

    const [viewImage, setViewImage] = useState(0)
    const imgsView = imgMap ? [...imgs, imgMap] : imgs
    const wichView = from === 'full' ? 'w-[700px] h-[500px]' : 'w-[600px] h-[450px]'
    return (
        <div className='relative'>

            <div className={`${wichView} h-[450px] relative overflow-hidden`}>
                <img
                    src={imgsView[viewImage]}
                    alt="route"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform"
                />
            </div>
            <div>
                {

                    (0 !== viewImage) && (

                        <button
                            className=" absolute bottom-52 left-2  flex opacity-40 hover:opacity-50 justify-center items-center  
         bg-neutral-200 text-neutral-700 hover:bg-neutral-100 py-0 h-10 w-10 rounded-full border-gray-300
          border shadow-lg transition-transform duration-300 transform hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation();
                                setViewImage((prev) => prev - 1)
                            }}
                        >
                            <IconChevronLeft />
                        </button>

                    )
                }
                {
                    ((viewImage + 1) !== imgsView.length) && (

                        <button
                            className=" absolute bottom-52  right-0 flex opacity-40 hover:opacity-50 justify-center items-center  
         bg-neutral-200 text-neutral-700 hover:bg-neutral-100 py-0 h-10 w-10 rounded-full border-gray-300
          border shadow-lg transition-transform duration-300 transform hover:scale-110"
                            onClick={(e) => {
                                e.stopPropagation();
                                setViewImage((prev) => prev + 1)
                            }}
                        >
                            <IconChevronRight />
                        </button>
                    )
                }

            </div>

            {/* <div className='w-[600px] h-[450px]'>

                <img
                    src={imgsView[viewImage]}
                    alt="route"
                    className=" rounded-lg transition duration-300 ease-in-out transform "
                />
            </div> */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center mt-3 gap-8">

                {
                    imgsView.length > 1 && imgsView.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setViewImage(index)
                            }}
                            className={`w-5 h-5  focus:outline-none  rounded-full hover:bg-gray-300 transition duration-300 ease-in-out
                    ${viewImage === index ? 'bg-white' : 'bg-gray-400'}
                    `}
                        >

                        </button>
                    ))
                }
            </div>
        </div>
    )
}

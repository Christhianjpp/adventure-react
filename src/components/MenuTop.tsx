import React, { useRef, useState, useEffect } from "react";
import { IconChevronRight } from "./icons/IconChevronRight";
import { IconChevronLeft } from "./icons/IconChevronLeft";


interface MenuTopProps {
    selectId: (Id: string) => void;
    categories: Array<{
        _id: string;
        name: string;
    }>;
}
type PropsButton = {
    onClick: () => void;
    direction: "left" | "right";
}
const ScrollButton = ({ onClick, direction }: PropsButton) => (
    <button
        className="flex opacity-40 hover:opacity-50 justify-center items-center  
         bg-neutral-200 text-neutral-700 hover:bg-neutral-100 py-0 h-8 w-8 rounded-full border-gray-300
          border shadow-lg transition-transform duration-300 transform hover:scale-110"
        onClick={onClick}
    >
        {direction === "left" ? <IconChevronLeft /> : <IconChevronRight />}
    </button>
);

export const MenuTop: React.FC<MenuTopProps> = ({ categories, selectId }) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [selectedId, setSelectedId] = useState<string>()


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (divRef.current) {
            setIsMouseDown(true);
            setStartX(e.pageX - divRef.current.offsetLeft);
            setScrollLeft(divRef.current.scrollLeft);
        }
    };

    const handleMouseLeaveOrUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMouseDown || !divRef.current) return;
        e.preventDefault();
        const x = e.pageX - divRef.current.offsetLeft;
        const walk = x - startX;
        divRef.current.scrollLeft = scrollLeft - walk;
        updateScrollStatus();
    };

    const scrollHandler = (direction: "left" | "right") => {
        if (divRef.current) {
            divRef.current.scrollLeft += direction === "left" ? -300 : 300;
            updateScrollStatus();
        }
    };

    const updateScrollStatus = () => {
        if (divRef.current) {
            const tolerance = 2; // Tolerancia de 2 píxeles para compensar diferencias de redondeo

            setIsAtStart(divRef.current.scrollLeft <= tolerance);
            setIsAtEnd(divRef.current.scrollLeft + divRef.current.clientWidth >= divRef.current.scrollWidth - tolerance);


        }
    };


    useEffect(() => {
        const handleScroll = () => {
            updateScrollStatus();
        };
        const currentDiv = divRef.current;
        currentDiv?.addEventListener("scroll", handleScroll);
        updateScrollStatus();
        return () => {
            currentDiv?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="  flex items-center justify-center my-3 ">

            <div className="w-8">

                {!isAtStart && <ScrollButton onClick={() => scrollHandler("left")} direction="left" />}
            </div>


            <div className="flex items-center justify-between ">
                <div className="max-w-[60vw] w-full gap-4 overflow-x-hidden flex transition-transform duration-1000 ease-in-out  "

                    //className="w-full gap-4 overflow-x-hidden flex"
                    ref={divRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                >
                    {categories.map((category) => (
                        <button
                            key={category._id}
                            className={` text-neutral-700 hover:underline active:text-green-500 py-2 px-2 rounded  flex flex-col whitespace-nowrap
                        ${selectedId === category._id ? 'underline' : ''} `}


                            onClick={() => {

                                setSelectedId(category._id)
                                selectId(category._id)
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

            </div>

            <div className="w-8">

                {!isAtEnd && <ScrollButton onClick={() => scrollHandler("right")} direction="right" />}
            </div>
        </div>
    );
};

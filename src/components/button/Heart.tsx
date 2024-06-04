import { IconHeartOutline } from "../icons/IconHeartOutline"

interface Props {
    numLikes: number;

}
export const Heart = ({ numLikes }: Props) => {
    return (
        <div className=" flex flex-col justify-center  items-center">
            <IconHeartOutline width={35} height={35} />
            <span className="font-light my-0 text-xs  h-1">
                {numLikes}
            </span>
        </div>
    )
}

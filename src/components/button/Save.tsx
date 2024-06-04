import { IconSave } from "../icons/IconSave"

interface Props {

}
export const Save = ({ }: Props) => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <IconSave width={35} height={35} />
            <span className="font-light my-0 text-xs  h-1">

            </span>
        </div>
    )
}
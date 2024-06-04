import { IconChatBoxOutline } from "../icons/IconChatBoxOutline"

interface Props {

}
export const ChatBox = ({ }: Props) => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <IconChatBoxOutline width={35} height={35} />
            <span className="font-light my-0 text-xs  h-1">

            </span>
        </div>
    )
}

import { RouteViewImage } from "./RouteViewImage"

export const ImageRouteFull = ({ imgs }: { imgs: string[] }) => {
    return (
        <div className="">

            <RouteViewImage imgs={imgs} from="full" />


        </div>
    )
}

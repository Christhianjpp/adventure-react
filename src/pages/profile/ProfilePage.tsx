import { useSelector } from "react-redux"
import { json, useParams } from "react-router-dom"
import { RootState } from "../../state/store"
import { LoginGoogle } from "../../components/auth/LoginGoogle"
import { UserTop } from "../../components/user/UserTop"
import { UserInfo } from "../../components/user/UserInfo"
import { UserBottom } from "../../components/user/UserBottom"


const ProfilePage = () => {

    const { user } = useSelector((state: RootState) => state.auth)
    const params = useParams()

    return (
        <div className=" flex h-full flex-col min-h-dvh  items-center ">
            <div className="bg-neutral-50">

                <div className=" flex flex-col w-[600px] bg-white  justify-center items-center shadow-md">

                    <UserTop />
                    <UserInfo />

                </div>
                <UserBottom />
            </div>

            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default ProfilePage
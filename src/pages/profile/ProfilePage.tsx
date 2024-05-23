import { useParams } from "react-router-dom"


const ProfilePage = () => {
    const params = useParams()
    return (
        <div>ProfilePage
            <div>{params.user}</div>
        </div>
    )
}

export default ProfilePage
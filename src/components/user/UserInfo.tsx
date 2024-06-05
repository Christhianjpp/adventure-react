
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { User } from '../../interfaces/userInterface'

export const UserInfo = () => {
    const user: User | null = useSelector((state: RootState) => state.auth.user)

    if (!user) {
        return null
    }
    const { followers, following } = user
    return (
        <div className='flex justify-between w-full px-8 py-5'>
            <div className='flex flex-col justify-center items-center '>
                <span>Publicaciones</span>
                <span>0</span>
            </div>
            <div className='border-r-2' />
            <div className='flex flex-col justify-center items-center'>
                <span>Favoritas</span>
                <span>0</span>
            </div>
            <div className='border-r-2' />
            <div className='flex flex-col justify-center items-center'>
                <span>Seguirodres</span>
                <span>    {followers.length}</span>
            </div>
            <div className='border-r-2' />
            <div className='flex flex-col justify-center items-center'>
                <span>Siguiendo</span>
                <span> {following.length}</span>
            </div>
        </div>
    )
}

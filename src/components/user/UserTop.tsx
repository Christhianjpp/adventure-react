
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { User } from '../../interfaces/userInterface'

export const UserTop = () => {
    const user: User | null = useSelector((state: RootState) => state.auth.user)

    if (!user) {
        return null
    }
    const { name, img } = user
    return (
        <div className='w-full px-4  bg-white pt-4'>
            <div className='flex  items-center gap-6'>
                <img src={img} alt={name} className='w-24  h-24 rounded-full' />
                {name}

            </div>
        </div>
    )
}

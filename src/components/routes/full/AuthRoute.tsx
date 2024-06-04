import React from 'react'
import { Author } from '../../../interfaces/routeInterface'

interface Props {
    auth: Author;
}
export const AuthRoute = ({ auth }: Props) => {
    return (
        <div>
            <div className="flex items-center gap-6 justify-center">
                <p className="text-lg font-normal">{auth.name}</p>
                <img src={auth.img} alt="author" className="w-16 h-16 rounded-full" />
            </div>
        </div>
    )
}

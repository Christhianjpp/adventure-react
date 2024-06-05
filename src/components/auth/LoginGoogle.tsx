import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { fetchVerifyToken } from '../../state/auth/authSlice';
import { AppDispatch } from '../../state/store';

export const LoginGoogle = () => {

    const dispatch = useDispatch<AppDispatch>()

    return (

        <GoogleLogin
            onSuccess={credentialResponse => {


                const id_token = credentialResponse.credential || ''
                dispatch(fetchVerifyToken(id_token))

            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

import Router from 'next/router';
import { useUserState } from '@/atoms/userAtom';
import { axiosApi } from '@/lib/axios';
import { AxiosResponse } from 'axios';
import useNotification from '@/hooks/useNotification';
import { auth } from '@/lib/firebase/firebase';
import { signOut } from 'firebase/auth';

const useUserAuth = () => {
    const { user, setUser } = useUserState();
    const { error } = useNotification();

    const userStatus = () => {
        return user ? true : false;
    };
    // const emailVerified = () => {
    //     return user && user.email_verified_at ? true : false;
    // };

    const fetchUser = async (): Promise<boolean> => {
        if (user) {
            return true;
        }
        try {
            const res = await axiosApi.get('/api/user');
            if (!res.data) {
                axiosApi.get('/api/reflesh-token');
                setUser(null);
                return false;
            }
            setUser(res.data);
            return true;
        } catch {
            return false;
        }
    };

    const logout = async () => {
        try {
            const firebase = await signOut(auth);
            Router.push('/login');
        } catch (e) {
            // handle error
            console.log(e + 'エラーです');
        }
        // await axiosApi
        //     .post('/api/logout')
        //     .then((response: AxiosResponse) => {
        //         setUser(null);
        //         Router.push('/login');
        //     })
        //     .catch((err: any) => {
        //         console.log(err.response);
        //         if (err.response?.status === 500) {
        //             error('システムエラーです！！');
        //         }
        //     });
    };

    // return { userStatus, emailVerified, fetchUser, logout };
    return { userStatus, fetchUser, logout };
};
export default useUserAuth;

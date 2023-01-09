// user global state
import { atom, useRecoilState } from 'recoil';
import { User } from 'firebase/auth';

// type userState = { id: string; name: string; email_verified_at: string } | null;
type userState = User | null;

const userState = atom<userState>({
    key: 'user',
    default: null,
    // TypeError: Cannot freezeを回避
    dangerouslyAllowMutability: true,
});

export const useUserState = () => {
    const [user, setUser] = useRecoilState<userState>(userState);

    return { user, setUser };
};
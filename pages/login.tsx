import Router from 'next/router';
import NextLink from 'next/link';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    createTheme,
    ThemeProvider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { auth } from '@/lib/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useUserState } from '@/atoms/userAtom';
import useNotification from '@/hooks/useNotification';

// POSTデータの型
type LoginForm = {
    email: string;
    password: string;
};

const theme = createTheme();

const Login = () => {
    const { error } = useNotification();

    // React-Hook-Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    // state定義

    const { setUser } = useUserState();

    const onSubmit = async (data: LoginForm) => {
        // await createUserWithEmailAndPassword(auth, data.email, data.password)
        // Router.push("/")
        try {
            const firebase = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            );

            if (firebase.user) {
                setUser(firebase.user);
                Router.push('/');
            }
        } catch (e) {
            // handle error
            console.log(e + 'エラーです');
        }
        // await axiosApi
        //     // CSRF保護の初期化
        //     .get('/sanctum/csrf-cookie')
        //     .then((response: AxiosResponse) => {
        //         // ログイン処理
        //         axiosApi
        //             .post('api/login', data)
        //             .then((response: AxiosResponse) => {
        //                 console.log(response.data);
        //                 setUser(response.data);
        //                 Router.push('/email/verify');
        //             })
        //             .catch((err: any) => {
        //                 console.log(err.response);
        //                 // バリデーションエラー
        //                 if (err.response?.status === 422) {
        //                     const errors = err.response?.data.errors;
        //                     Object.keys(errors).map((key: string) => {
        //                         error(errors[key][0]);
        //                     });
        //                 }
        //                 if (err.response?.status === 500) {
        //                     error('システムエラーです！！');
        //                 }
        //             });
        //     });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ログイン画面
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            {...register('email', {
                                required: '必須入力です。',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message:
                                        '有効なメールアドレスを入力してください。',
                                },
                            })}
                            error={'email' in errors}
                            helperText={errors.email?.message}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="メールアドレス"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            {...register('password', {
                                required: '必須入力です。',
                                pattern: {
                                    value: /^([a-zA-Z0-9]{8,})$/,
                                    message:
                                        '8文字以上の半角英数字で入力してください',
                                },
                            })}
                            error={'password' in errors}
                            helperText={errors.password?.message}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="パスワード"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            ログイン
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <NextLink href="/forgot-password" passHref>
                                    <Link variant="body2">
                                        パスワードを忘れた方はこちら
                                    </Link>
                                </NextLink>
                            </Grid>
                            <Grid item>
                                <NextLink href="/register" passHref>
                                    <Link variant="body2">登録はこちら</Link>
                                </NextLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
export default Login;

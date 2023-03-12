import type { NextPageWithLayout } from 'next';
import NextLink from 'next/link';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import useUserAuth from '@/hooks/useUserAuth';
import { Layout } from '@/components/layouts/Layout';

const MyPageList: NextPageWithLayout = () => {
    const { logout } = useUserAuth();

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    mt: { xs: '12%', md: '64px' },
                    bgcolor: 'background.paper',
                }}>
                <List>
                    <NextLink href="/mypage/setting" passHref>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="アカウント設定" />
                            </ListItemButton>
                        </ListItem>
                    </NextLink>
                    <ListItem onClick={logout} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="ログアウト" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </>
    );
};

MyPageList.getLayout = page => (
    <Layout title={'マイページ'} link={''}>
        {page}
    </Layout>
);

export default MyPageList;

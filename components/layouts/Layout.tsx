import { ReactElement } from 'react';
import Header from '@/components/parts/Header';
import Footer from '@/components/parts/Footer';
import { PropaneSharp } from '@mui/icons-material';

type LayoutProps = Required<{
    readonly children: ReactElement;
    title: string;
    link: string;
}>;

export const Layout = ({ children, title, link }: LayoutProps) => (
    <>
        <Header title={title} link={link} />
        {children}
        <Footer />
    </>
);

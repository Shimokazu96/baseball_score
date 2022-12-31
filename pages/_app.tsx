import '../styles/globals.css';
import type { AppPropsWithLayout } from 'next/app';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);

    return getLayout(
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>,
    );
}

export default MyApp;

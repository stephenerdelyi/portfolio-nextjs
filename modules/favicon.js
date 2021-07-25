import Head from 'next/head'

export default function Favicon() {
    return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/images/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#2459c1"/>
            <meta name="msapplication-TileColor" content="#ffc40d"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    </>
}

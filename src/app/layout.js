import { APP_NAME, APP_NAME_DOMAIN, SEO, isProdMode } from '@/utils/constants'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import './globals.css'
import Container from './components/container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL(APP_NAME_DOMAIN),
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`,
    },
    viewport: SEO?.metaConfig?.viewPort,
    themeColor: SEO?.metaConfig?.themeColor,
    applicationName: APP_NAME,
    siteName: APP_NAME,
    authors: [{ name: APP_NAME, url: APP_NAME_DOMAIN }],
    creator: APP_NAME,
    publisher: APP_NAME,
    verification: {
        google: SEO?.metaConfig?.verification?.google,
    },
    openGraph: {
        title: SEO?.home?.title,
        description: SEO?.home?.description,
        url: APP_NAME_DOMAIN,
        siteName: APP_NAME,
        images: `/opengraph-image.png`,
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: APP_NAME_DOMAIN,
    },
    bookmarks: [APP_NAME_DOMAIN],
    appLinks: {
        android: {
            package: SEO?.metaConfig?.appLinks?.android?.package,
            app_name: SEO?.metaConfig?.appLinks?.android?.app_name,
        },
        web: {
            url: APP_NAME_DOMAIN,
            should_fallback: true,
        },
    },
    twitter: {
        card: SEO?.home?.card,
        title: SEO?.home?.title,
        description: SEO?.home?.description,
        siteId: SEO?.metaConfig?.twitter?.siteId,
        creator: SEO?.metaConfig?.twitter?.creator,
        creatorId: SEO?.metaConfig?.twitter?.creatorId,
        images: {
            url: `/opengraph-image.png.png`,
            alt: APP_NAME,
        },
        app: {
            name: SEO?.metaConfig?.twitter?.app?.name,
            id: {
                googleplay:
                    SEO?.metaConfig?.metaConfig?.twitter?.app?.id?.googleplay,
            },
        },
    },
    appleWebApp: {
        title: SEO?.home?.title,
        startupImage: [
            `/opengraph-image.png`,
            {
                url: `/opengraph-image.png`,
            },
        ],
    },
    ...(isProdMode && {
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
            },
        },
    }),
    other: {
        'msapplication-TileColor': SEO?.metaConfig?.themeColor,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="icon" type="image/png" href="/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
            </head>
            <body className={`text-primary bg-white ${inter.className}`}>
                <Container>
                    <Navbar />
                </Container>
                <main>{children}</main>
            </body>
        </html>
    )
}

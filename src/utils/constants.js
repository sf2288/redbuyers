export const APP_NAME = 'RedBuyers'
export const APP_NAME_DOMAIN =
    process.env.NEXT_PUBLIC_APP_NAME_DOMAIN || 'https://www.redbuyers.com'
export const isProdMode = process.env.NEXT_PUBLIC_ENV === 'production' // Some time we need this to specify based on diff deployed site. eg: When we only need to do something on redbuyers.com but not dev.redbuyers.com.

export const ITEMS_PER_PAGE = process.env.NEXT_PUBLIC_ITEMS_PER_PAGE || 10 // To control page(data) size from env, w/o needing to change the code.

export const SESSION_STORAGE_AUTH_KEY = 'red-buyer-token'

export const AppRoutes = {
    home: '/',
    browseHomes: '/browseHomes',
}

export const MenuLinks = [
    {
        title: 'Browse Homes',
        url: AppRoutes.browseHomes,
    },
].filter((item) => !item?.hidden)

export const SEO = {
    home: {
        title: `Sell Your Home Faster | Get an Instant Offer to Sell your Home`,
        description: `Sell your home in days now from the comfort of your couch. Tell us about your home and receive a highly competitive offer within 24 hours. We buy your home for cash.`,
        keywords: [],
    },
    browseHomes: {
        title: `Browse Homes`,
        description: `Browse Homes`,
        keywords: [],
    },
    metaConfig: {
        viewPort: {
            width: 'device-width',
            initialScale: 1,
            minimumScale: 1,
            maximumScale: 5,
            height: 'device-height',
        },
        themeColor: '#ffffff',
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
        appLinks: {
            android: {
                package: '',
                app_name: '',
            },
        },
        twitter: {
            card: 'summary_large_image',
            siteId: '',
            creator: `@${APP_NAME}`,
            creatorId: '',
            app: {
                name: '',
                id: {
                    googleplay: '',
                },
            },
        },
    },
}

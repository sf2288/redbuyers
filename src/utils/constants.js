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

export const HeaderMenuLinks = [
    {
        title: 'Sell',
        url: AppRoutes.home,
    },
    {
        title: 'Buy',
    },
    {
        title: 'Contact Us',
    },
]

export const MobileMenuLinks = [
    {
        title: 'Buy & Sell',
        subMenu: [
            {
                title: 'Sell',
                url: '',
            },
            {
                title: 'Browse Home',
                url: AppRoutes.browseHomes,
            },
            {
                title: 'Cash Offer',
                url: '',
            },
            {
                title: 'Buy',
                url: '',
            },
            {
                title: 'New Construction',
                url: '',
            },
            {
                title: 'Pricing',
                url: '',
            },
            {
                title: 'Down Payment',
                url: '',
            },
        ],
    },
    {
        title: 'Investment',
        subMenu: [
            {
                title: 'Co-Investment',
                url: '',
            },
            {
                title: 'Partnership Buying',
                url: '',
            },
        ],
    },
    {
        title: 'Company',
        subMenu: [
            {
                title: 'About',
                url: '',
            },
            {
                title: 'Contact Us',
                url: '',
            },
            {
                title: 'Vendors',
                url: '',
            },
            {
                title: 'Careers',
                url: '',
            },
            {
                title: 'Privacy Policy',
                url: '',
            },
            {
                title: 'Terms & Conditions',
                url: '',
            },
        ],
    },
    {
        title: 'Learn',
        subMenu: [
            {
                title: 'Seller FAQs',
                url: '',
            },
            {
                title: 'Buyer FAQs',
                url: '',
            },
            {
                title: 'Blogs',
                url: '',
            },
            {
                title: 'Mortgage Calculator',
                url: '',
            },
        ],
    },
    {
        title: 'Location',
        subMenu: [
            {
                title: 'Greater Toronto Area',
                url: '',
            },
            {
                title: 'Region of Peel',
                url: '',
            },
            {
                title: 'Region of Hamilton',
                url: '',
            },
            {
                title: 'Region of Waterloo',
                url: '',
            },
            {
                title: 'View All Locations',
                url: '',
                isAllLocation: true,
            },
        ],
    },
]

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

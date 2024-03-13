import {
    CheckOutTheseNitroFavorites_2ServerBoosts,
    CheckOutTheseNitroFavorites_ColorYourExperience,
    CheckOutTheseNitroFavorites_CustomizeYourProfile,
    ExploreWhatsNew_EarlyAccess,
    ExploreWhatsNew_SpecialMemberPricing,
    ExploreWhatsNew_UnlimitedSuperReactions
} from '@public/images'
const static_data = [
    {
        category: 'Explore Whats New',
        cards: [
            {
                name: 'Early Access',
                title: 'Get exclusive access to certain new features before they’re released to everyone.',
                description:
                    'Nitro members, get ready to get your hands on the latest and greatest before everyone else.',
                img: ExploreWhatsNew_EarlyAccess.src
            },
            {
                name: 'Special Member Pricing',
                title: 'Snag sweet discounts on any - or every! - item at the Shop.',
                description: 'Exclusive savings are reserved for Nitro members only.',
                img: ExploreWhatsNew_SpecialMemberPricing.src,
                button: 'Visit the Shop'
            },
            {
                name: 'Unlimited Super Reactions',
                title: 'We made Super Reactions unlimited so you can unleash the chaos in your chats.',
                description: 'Now available on Nitro and Nitro Basic.',
                img: ExploreWhatsNew_UnlimitedSuperReactions.src
            }
        ]
    },
    {
        category: 'Check Out These Nitro Favorites',
        cards: [
            {
                name: 'Customize Your Profile',
                title: 'Use a different avatar, profile theme, banner, and bio in each of your servers.',
                description:
                    'Explore all the ways to customize your profiles across servers. Only available with Nitro.',
                img: CheckOutTheseNitroFavorites_CustomizeYourProfile.src,
                button: 'Take me there'
            },
            {
                name: 'Color Your Experience',
                title: 'Add your vibe to Discord with unique theme colors.',
                description:
                    'Bring some fresh hues to your Discord views with themes. Choose from over 20 color themes, like Cotton Candy, Midnight Blurple, and many more.',
                img: CheckOutTheseNitroFavorites_ColorYourExperience.src,
                button: 'Take me there'
            },
            {
                name: '2 Server Boosts + 30% off',
                title: 'Give your favorite communities a boost and unlock awesome perks.',
                description:
                    'Support your favorite communities and friend servers! Nitro members get 2 free Boosts & 30% off all others.',
                img: CheckOutTheseNitroFavorites_2ServerBoosts.src
            }
        ]
    }
]
export { static_data }

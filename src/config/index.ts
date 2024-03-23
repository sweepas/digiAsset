export const PRODUCT_CATEGORIES = [
    {
        label: "UI kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: 'Editor pics',
                href: '#',
                imageSource: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSource: "/nav/ui-kits/blue.jpg"
            },
            {
                name: 'Bes sellers',
                href: '#',
                imageSource: "/nav/ui-kits/purple.jpg"
            },
           
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: 'Favorite Icons',
                href: '#',
                imageSource: "/nav/icons/picks.jpg"
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSource: "/nav/icons/new.jpg"
            },
            {
                name: 'Best selling icons',
                href: '#',
                imageSource: "/nav/icons/bestsellers.jpg"
            },
        ]
    }
]
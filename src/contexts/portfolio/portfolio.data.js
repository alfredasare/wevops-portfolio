import uuid from 'react-uuid';

export const PORTFOLIO_DATA = [
    {
        id: uuid(),
        index: 0,
        projectName: 'Chop-flix',
        projectReason: 'Web development',
        hero: require('../../assets/images/chop_flix.jpg'),
        logo: require('../../assets/images/chop_flix_logo.png'),
        websiteLink: 'https://chop-flix.netlify.app/',
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/section1.png')
            },
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/overview.jpg'),
            },
            {
                id: uuid(),
                type: 'video',
                source: require('../../assets/videos/chop-flix2.mp4'),
                poster: require('../../assets/images/chop-flix-poster.jpeg'),
                loop: true,
            },

        ],
    },
    {
        id: uuid(),
        index: 1,
        projectName: 'Design Studios',
        projectReason: 'Portfolio design',
        logo: require('../../assets/images/chop_flix_logo.png'),
        hero: require('../../assets/images/drvmroll.jpg'),
        websiteLink: 'https://drvmroll-design-portfolio.netlify.app/',
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/design-studios1.jpg'),
            },
            {
                id: uuid(),
                type: 'video',
                source: require('../../assets/videos/design-studios.mp4'),
                poster: require('../../assets/images/design-studios-poster.jpeg'),
                loop: false,
            },
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/design-studios3.001.jpeg'),
            },
        ],
    },
    {
        id: uuid(),
        index: 2,
        projectName: 'Edanra',
        projectReason: 'Web development',
        logo: require('../../assets/images/frlogistics_logo.png'),
        hero: require('../../assets/images/edanra.jpg'),
        websiteLink: 'https://edanra.com',
        projectResources: [
            {
                id: uuid(),
                type: 'video',
                source: require('../../assets/videos/edanra1.mp4'),
                poster: require('../../assets/images/edanra-poster1.jpeg'),
                loop: false,
            },
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/edanra2.png'),
            },
            {
                id: uuid(),
                type: 'video',
                source: require('../../assets/videos/edanra3.mp4'),
                poster: require('../../assets/images/edanra-poster2.jpeg'),
                loop: false,
            },
        ],
    },
    {
        id: uuid(),
        index: 3,
        projectName: 'Fr-Logistics',
        projectReason: 'Web development',
        logo: require('../../assets/images/frlogistics_logo.png'),
        hero: require('../../assets/images/frlogistics.jpg'),
        websiteLink: 'https://frlogisticsltd.com/',
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/fr1.png'),
            },
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/frbooking.png'),
            },
            {
                id: uuid(),
                type: 'pic',
                source: require('../../assets/images/dashboard.jpg'),
            },

        ],
    },
];
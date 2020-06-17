import uuid from 'react-uuid';

export const PORTFOLIO_DATA = [
    {
        id: uuid(),
        index: 0,
        projectName: 'Chop-flix',
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
                source: require('../../assets/images/overview.jpg')
            },
            {
                id: uuid(),
                type: 'video',
                source: require('../../assets/videos/chop-flix2.m4v')
            },

        ],
    },
    {
        id: uuid(),
        index: 1,
        projectName: 'Drvmroll',
        logo: require('../../assets/images/chop_flix_logo.png'),
        hero: require('../../assets/images/drvmroll.jpg'),
        websiteLink: 'https://drvmroll-design-portfolio.netlify.app/',
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            }
        ],
    },
    {
        id: uuid(),
        index: 3,
        projectName: 'Edanra',
        logo: require('../../assets/images/frlogistics_logo.png'),
        hero: require('../../assets/images/edanra.jpg'),
        websiteLink: 'https://edanra.com',
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
        ],
    },
    {
        id: uuid(),
        index: 2,
        projectName: 'Fr-Logistics',
        logo: require('../../assets/images/frlogistics_logo.png'),
        hero: require('../../assets/images/frlogistics.jpg'),
        websiteLink: 'https://frlogisticsltd.com/',
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
            {
                id: uuid(),
                type: 'pic',
                source: ``
            },
        ],
    },
];
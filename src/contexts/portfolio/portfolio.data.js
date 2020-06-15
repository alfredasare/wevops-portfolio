import uuid from 'react-uuid';

export const PORTFOLIO_DATA = [
    {
        id: uuid(),
        index: 0,
        projectName: 'Chop-flix',
        logo: require('../../assets/images/chop_flix_logo.png'),
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                image: require('../../assets/images/chop_flix.jpg'),
                websiteLink: 'https://chop-flix.netlify.app/',
            },
            {
                id: uuid(),
                type: 'pic',
                url: ``
            }
        ],
    },
    {
        id: uuid(),
        index: 1,
        projectName: 'Drvmroll',
        logo: require('../../assets/images/chop_flix_logo.png'),
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                image: require('../../assets/images/drvmroll.jpg'),
                websiteLink: 'https://drvmroll-design-portfolio.netlify.app/',
            },
            {
                id: uuid(),
                type: 'pic',
                url: ``
            }
        ],
    },
    {
        id: uuid(),
        index: 2,
        projectName: 'Edanra',
        logo: require('../../assets/images/edanra_logo.png'),
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                image: require('../../assets/images/edanra.jpg'),
                websiteLink: 'https://edanra.com',
            },
            {
                id: uuid(),
                type: 'pic',
                url: ``
            }
        ],
    },
    {
        id: uuid(),
        index: 3,
        projectName: 'Fr-Logistics',
        logo: require('../../assets/images/frlogistics_logo.png'),
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                image: require('../../assets/images/frlogistics.jpg'),
                websiteLink: 'https://frlogisticsltd.com/',
            },
            {
                id: uuid(),
                type: 'pic',
                url: ``
            }
        ],
    },
];

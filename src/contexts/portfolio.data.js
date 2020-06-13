import uuid from 'react-uuid';

export const PORTFOLIO_DATA = [
    {
        id: uuid(),
        index: 1,
        name: "Project 1",
        projectCategory: "UI / UX",
        urlRep: 'project1.com',
        projectInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eius pariatur quibusdam quos reiciendis rerum " +
            "sed ullam velit voluptate? Repellendus, voluptates, voluptatum! Accusamus dicta, ducimus iusto perspiciatis quae temporibus?",
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                url: ``
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
        name: "Project 2",
        projectCategory: "Graphic Design",
        urlRep: 'project2.com',
        projectInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eius pariatur quibusdam quos reiciendis rerum " +
            "sed ullam velit voluptate? Repellendus, voluptates, voluptatum! Accusamus dicta, ducimus iusto perspiciatis quae temporibus?",
        projectResources: [
            {
                id: uuid(),
                type: 'pic',
                url: ``
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
        name: "Project 3",
        projectCategory: "Video Editing",
        urlRep: 'project3.com',
        projectInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum eius pariatur quibusdam quos reiciendis rerum " +
            "sed ullam velit voluptate? Repellendus, voluptates, voluptatum! Accusamus dicta, ducimus iusto perspiciatis quae temporibus?",
        projectResources: [
            {
                id: uuid(),
                type: 'video',
                url: ``
            },
            {
                id: uuid(),
                type: 'pic',
                url: ``
            }
        ],
    }
];

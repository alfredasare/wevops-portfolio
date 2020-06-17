import React from "react";
import Section from "../project-sections/section.component";


const SectionList = ({resources}) => {
    return resources ? resources.map((resource, index) => {
        if (resource.type === 'pic'){
            return <Section type='pic' source={resource.source} key={resource.uid}/>
        }else if(resource.type === 'video'){
            return <Section type='video' source={resource.source} key={resource.uid}/>
        }
        return null;
    }) : <></>
};
export default SectionList;
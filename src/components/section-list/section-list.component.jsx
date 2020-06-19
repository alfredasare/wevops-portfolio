import React from "react";
import Section from "../project-sections/section.component";


const SectionList = ({resources}) => {
    return resources ? resources.map((resource, index) => {
        if (resource.type === 'pic'){
            return <Section type='pic' source={resource.source} key={resource.id}/>
        }else if(resource.type === 'video'){
            return <Section type='video' source={resource.source} key={resource.id} loop={resource.loop} poster={resource.poster}/>
        }
        return null;
    }) : <></>
};
export default SectionList;
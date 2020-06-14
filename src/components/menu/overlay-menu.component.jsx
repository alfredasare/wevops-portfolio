import React, {useEffect} from "react";
import {StyledMenu} from "./overlay-menu.styles";

const OverlayMenu = ({open, setOpen}) => {

    const isHidden = !!open;
    // const tabIndex = isHidden ? 0 : -1;

    useEffect(() => {
       if (open) {
           document.querySelector("html").classList.add("hide-overflow");
       } else {
           document.querySelector("html").classList.remove("hide-overflow");
       }
    });

    return (
        <StyledMenu open={open} aria-hidden={!isHidden}>

        </StyledMenu>
    );
};

export default OverlayMenu;
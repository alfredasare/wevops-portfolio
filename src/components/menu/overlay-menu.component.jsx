import React, {useEffect} from "react";
import {MenuContent, StyledMenu} from "./overlay-menu.styles";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

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
            <Link to="/">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    Home
                </MenuContent>
            </Link>
            <Link to="/works">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    Projects
                </MenuContent>
            </Link>
            <HashLink to="/#about">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    About us
                </MenuContent>
            </HashLink>
            <HashLink to="/#contact">
                <MenuContent open={open} aria-hidden={!isHidden} onClick={() => setOpen(!open)}>
                    Contact
                </MenuContent>
            </HashLink>
        </StyledMenu>
    );
};

export default OverlayMenu;
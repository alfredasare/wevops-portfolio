import React, {useState} from "react";
import {NavBarBrand, NavBarContainer, NavBarRow, NavMenuContainer, NavMenuIcon, NavMenuText} from "./navbar.styles";
import Burger from "../burger/burger.component";
import OverlayMenu from "../menu/overlay-menu.component";
import {WevopsLogo} from "../icons/icons.component";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <NavBarContainer>
            <NavBarRow>
                <OverlayMenu open={open} setOpen={setOpen}/>
                <NavBarBrand href="/">
                    <WevopsLogo alt="wevops logo"/>
                </NavBarBrand>
                <NavMenuContainer>
                    <NavMenuText onClick={() => setOpen(!open)}>
                        {open ?  `close` : `menu`}
                    </NavMenuText>
                    <NavMenuIcon>
                        <Burger open={open} setOpen={setOpen}/>
                    </NavMenuIcon>
                </NavMenuContainer>
            </NavBarRow>
        </NavBarContainer>
    );
};

export default NavBar;
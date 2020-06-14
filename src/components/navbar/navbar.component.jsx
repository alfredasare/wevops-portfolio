import React, {useState} from "react";
import {NavBarBrand, NavBarContainer, NavBarRow, NavMenuContainer, NavMenuIcon, NavMenuText} from "./navbar.styles";
import Burger from "../burger/burger.component";
import OverlayMenu from "../menu/overlay-menu.component";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <NavBarContainer>
            <NavBarRow>
                <OverlayMenu open={open} setOpen={setOpen}/>
                <NavBarBrand href="/">wevops</NavBarBrand>
                <NavMenuContainer>
                    <NavMenuText onClick={() => setOpen(!open)}>menu</NavMenuText>
                    <NavMenuIcon>
                        <Burger open={open} setOpen={setOpen}/>
                    </NavMenuIcon>
                </NavMenuContainer>
            </NavBarRow>
        </NavBarContainer>
    );
};

export default NavBar;
import { useState } from "react";
import { HeaderStyled } from "./styles/Header.styled";
import Menu from "./Menu";


export default function Header() {
    const [open, setOpen] = useState(false)

    function handleToggleMenu() {
        setOpen((isOpen) => !isOpen)
    }

    return (
        <HeaderStyled>
            <img src="/images/logo.svg" />
            <button onClick={handleToggleMenu}>
                <img src={`/images/icon-${open ? "close" : "hamburger"}.svg`} />
            </button>
            <Menu open={open} />

        </HeaderStyled>
    )
}
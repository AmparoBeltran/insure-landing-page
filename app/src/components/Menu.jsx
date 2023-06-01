/* eslint-disable react/prop-types */
import { MenuStyled } from "./styles/Menu.styled";

export default function Menu({ open }) {
    return (
        <MenuStyled open={open}>
            <div>
                <a href="#">How we work</a>
                <a href="#">Blog</a>
                <a href="#">Account</a>
                <a href="#" className="border">View plans</a>
            </div>
        </MenuStyled>
    )
}
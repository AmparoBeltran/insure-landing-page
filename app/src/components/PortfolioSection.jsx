import { PortfolioSectionStyled } from "./styles/PortfolioSection.styled";

export default function PortfolioSection() {
    return (
        <PortfolioSectionStyled>
            <div className="flex-column">
                <div className="title">
                    <h2>Find out more</h2>
                    <h2>about how we work</h2>
                </div>
                <a className="border" href="#">How we work</a>
            </div>
        </PortfolioSectionStyled>
    )
}
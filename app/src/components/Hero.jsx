import { HeroStyled } from "./styles/Hero.styled";

export default function Hero() {
    return (
        <HeroStyled>
            <img className="image-intro-mobile " src="/images/image-intro-mobile.jpg" alt="intro-image" />
            <img className="image-intro-desktop" src="/images/image-intro-desktop.jpg" alt="intro-image" />

            <div className="hero ">

                <div className="wrapper flex-column">
                    <hr />
                    <div className="title">
                        <h1>Humanizing</h1>
                        <h1>your insurance.</h1>
                    </div>
                    <p>
                        Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.
                    </p>
                    <a className="border" href="#">View plans</a>

                </div>
            </div>
        </HeroStyled>
    )
}
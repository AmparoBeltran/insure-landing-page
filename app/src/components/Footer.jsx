import { FooterStyled } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <FooterStyled>

            <div className="company-links">
                <img src="/images/logo.svg" />
                <div className="social-media">
                    <a href="#"><img src="/images/icon-facebook.svg" /></a>
                    <a href="#"><img src="/images/icon-twitter.svg" /></a>
                    <a href="#"><img src="/images/icon-pinterest.svg" /></a>
                    <a href="#"><img src="/images/icon-instagram.svg" /></a>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="wrapper">
                    <span>Our company</span>
                    <div>
                        <a href="#">How we work</a>
                        <a href="#">Why Insure?</a>
                        <a href="#">View plans</a>
                        <a href="#">Reviews</a>
                    </div>
                </div>
                <div className="wrapper">
                    <span>Help me</span>
                    <div>
                        <a href="#">FAQ</a>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
                <div className="wrapper">
                    <span>Contact</span>
                    <div>
                        <a href="#">Sales</a>
                        <a href="#">Support</a>
                        <a href="#">Live chat</a>
                    </div>


                </div>
                <div className="wrapper">
                    <span>Others</span>
                    <div>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <a href="#">Licenses</a>
                    </div>
                </div>
            </div>
        </FooterStyled >
    )
}
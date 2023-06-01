import { AttributesSectionStyled } from "./styles/AttributesSection.styled";

export default function AttributesSection() {
    return (
        <AttributesSectionStyled>

            <div className="title">
                <hr />
                <h2>We’re different</h2>
            </div>
            <div className="wrapper">

                <div className="flex-column" >
                    <img src="/images/icon-snappy-process.svg" />
                    <h3>Snappy Process</h3>
                    <p>
                        Our application process can be completed in minutes, not hours. Don’t get
                        stuck filling in tedious forms.
                    </p>
                </div>

                <div className="flex-column" >
                    <img src="/images/icon-affordable-prices.svg" />
                    <h3>Affordable Prices</h3>
                    <p>
                        We don’t want you worrying about high monthly costs. Our prices may be low,
                        but we still offer the best coverage possible.
                    </p>
                </div>

                <div className="flex-column" >
                    <img src="/images/icon-people-first.svg" />
                    <h3>People First</h3>
                    <p>
                        Our plans aren’t full of conditions and clauses to prevent payouts. We make
                        sure you’re covered when you need it.
                    </p>
                </div>
            </div>

        </AttributesSectionStyled>
    )
}
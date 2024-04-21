import './Welcome.css';
import WelcomeImage from "../asserts/Welcome.jpg";

const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${WelcomeImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const Welcome = () => {
    return (
        <div style={containerStyle}>
            <h3>PURPOSE</h3>

            <p className="paragraph">Personal needs such as marriages, higher education, business travel, medical emergencies or any unforeseen expenses
                Secured overdraft may be allowed as liquidity finance
                For taking benefit of lower interest rate, customers can also apply for takeover of existing mortgage loan/s from other Banks/FI
            </p>
            <h3>MORTGAGE LOAN ELIGIBILITY</h3>

            <p className="paragraph">Indian citizen (both resident and non-resident) having regular source of income and owning non-agricultural (residential / commercial/industrial) property.
                Minimum age - 18 years and maximum age - 75 years.
                Individuals may apply singly or jointly with other eligible individuals.</p>
            <h3>QUANTUM OF LOAN</h3>

            <p className="paragraph">Minimum of Rs.5 Lakh
                Maximum - Resident Indian - Rs.10 Crore and Non Resident Indians - Rs.5 Crore
                MORTGAGE LOAN MARGIN</p>

            <p className="paragraph">50% of the fair market value of the property mortgaged as per the latest valuation report.</p>
            <h3>NATURE OF FACILITY</h3>

          <p  className="paragraph">  <ul>
                <li>Term Loan</li>
                <li>Over Draft</li>
            </ul>
            </p>
            <h3>Term loan:</h3>

            <p className="paragraph">The maximum repayment tenure will be lowest of the following three:
                15 years (180 months)
                Residual period till the borrower attains the age of 75 years
                5 years prior to the residual life of the property.</p>
        </div>
    )
}

export default Welcome
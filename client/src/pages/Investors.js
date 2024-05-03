import Header from '../components/Header'
import './Investors.css'
import Investor from "../asserts/Investor.jpg";

const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${Investor})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const Investors = () => {

    return (
        <div style={containerStyle}>
            <Header />
            <h3>2024 Q1 interim management statement</h3>
            <p>Our 2024 Q1 IMS will be published on 24 April, with documents available from 7am.</p>
            <h3>Broaden our Mass Affluent and IP&I offering</h3>
            <p >
                Our event on 20 March had presentations from Jo Harris, CEO, Mass Affluent, and Chira Barua,
                CEO, Insurance, Pensions & Investments.</p>
            <h3>2023 annual report</h3>
            <p>
                See how the Group’s performing in our 2023 annual report and accounts.</p>
            <h3>Helping Britain Prosper: </h3>
            <p>annual report and accounts 2023</p>
            <p>For over 325 years we have supported Britain, helping people and businesses invest and grow. Today is no different.</p>

            <h3>Why invest in Lloyds Banking Group?</h3>
            <p>
                Our strategic vision, how we create value and what sets us apart.
            </p>
            <h3>  Annual report</h3>
            <p>
                Our annual report provides disclosures relating to our strategic, financial, operational, environmental and social performance.
            </p>


            <h3> Sustainability report</h3>
            <p>
                Our sustainability report provides information and progress on our environmental, social and governance performance.
                By focusing on Helping Britain Prosper, we aim to deliver sustainable growth and returns."2023 was an important year for our Group.
                We delivered a robust financial performance,
                and we are seeing real evidence of strategic progress as we transform the business.We have increased confidence in delivering successfully."
            </p>


        </div>
    )
}

export default Investors
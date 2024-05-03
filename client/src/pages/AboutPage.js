import Header from '../components/Header'
import about from "../asserts/aboutImage.jpg";
import './About.css'
const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${about})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const AboutPage = () => {
    return (
        <>
            <Header />
            <div style={containerStyle} className="container">

                <h3>About us</h3>
                <p className='para'>
                    Lloyds Banking Group is a leading UK-based financial services group.
                    We provide a wide range of banking and financial services, focused primarily on retail and commercial customers.
                    Find out more about the structure of the Group, our Directors and governance.</p>
                <h3>Our brands</h3>

                <p  className='para'>
                    Lloyds Banking Group incorporates many household names including Lloyds Bank,
                    Halifax, Bank of Scotland and Scottish Widows.
                    Offering our services through a number of recognised brands enables us to address the needs of our
                    different customer segments more effectively.</p>
                <h3>  Who we are</h3>
                <p  className='para'>
                    We're a financial services group focused on retail and commercial customers.
                </p>
                <h3>Our heritage</h3>
                <p  className='para'>
                    Our combined history stretches back more than 300 years.
                    Explore the origins of our core brands and access our rich heritage collections
                    including the company archives and WWI Roll of Honour.
                    Also find out more about our Museum on The Mound.</p>
                <h3>  Purpose and strategy</h3>
                <p  className='para'>
                    Our purpose is Helping Britain Prosper. We do this by creating a more sustainable and
                    inclusive future for people and businesses,
                    shaping finance as a force for good.
                </p>
                <h3>Our impact last year</h3>
                <p  className='para'>
                    7.5m+
                    customers contacted with cost-of-living support since 2022

                    £24.7m
                    donated to our Foundations and supported over 2,400 charities to help overcome complex social issues
                    £12bn+
                    funding to first time buyers in 2023, enabling more people to get onto the housing ladder

                    c.£17bn
                    financing provided to the social housing sector since 2018
                    £1.3m
                    raised through customer and colleague fundraising to support Crisis, our charity partner

                    3.9k
                    apprentices, graduates and engineers trained through our investment into the Manufacturing Technology Centrec.600k
                    businesses supported with customer resilience resources

                    £15.8bn
                    achieved in sustainable finance for corporate and institutional customers by the end of 2023</p>
                {/* <h3>Social sustainability</h3>
            <p>
                A sustainable and responsible approach to doing business is integral to everything we do.
                We aim to Help Britain Prosper by operating as a responsible, sustainable and inclusive Group. 
                This underpins our purpose and strategy.</p> */}
            </div>
        </>
    )
}

export default AboutPage
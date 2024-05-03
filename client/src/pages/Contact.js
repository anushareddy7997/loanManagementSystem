import Header from '../components/Header'
import './Contact.css';
import contact from "../asserts/contactus.jpg";

const Contact = () => {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${contact})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={containerStyle}>
            <Header />
            <div >
                <h3> Contact us</h3>
                <p>Find the contact details you need for your enquiry.</p>
                <h3>General enquiries</h3>
                <p >Please contact our main head office switchboard.</p>
                <p>Telephone: 020 7626 1500</p>
                <p>Shareholders – general enquiries
                    For administration of ordinary shares, change of address, change of ownership, dividend payments.
                    This email address is for private shareholders to raise general business questions only. 
                    Email: LBGShareholderQueries@equiniti.com
                    International: +44 (0)121 415 7066

                    Website: www.shareview.co.uk (Equiniti)
                    Write to:

                    Equiniti Limited
                    Aspect House
                    Spencer Road
                    Lancing
                    West Sussex
                </p>
                <h3> Careers team</h3>
                <p>

                    Email: careers@lloydsbanking.com<br />


                    Disability support<br />
                    Help is available if you need assistance in submitting a job application.<br />

                    Telephone: 0345 607 2222, pressing option 2<br />

                    Email: careers@lloydsbanking.com
                </p>


                <h3> Press office</h3>
                <p>
                    Email: mediarelationsteam@lloydsbanking.com<br />
                    To accredited journalists we provide a 24-hour telephone service.<br />
                    Telephone: 0207 356 2374
                </p>
                <h3>Changing your details</h3>
                <p>
                    Checking the payment status of a submitted invoice.
                    Email: VIMQueriesOwners@lloydsbanking.com</p>
            </div>

        </div>
    )
}

export default Contact
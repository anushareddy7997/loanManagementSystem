import React from 'react'
import Header from './Header';
import { useNavigate, Link } from "react-router-dom";
import { Button } from '@mui/material'
import invest from "../asserts/invest.jpg";
const AboutHomeLoan = ({ email }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${invest})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={containerStyle} className="container">
      <h3>LLOYDS Home Loans is the largest Mortgage Lender in India, which has helped over 30 lakh families
        to achieve the dream of owning a home.</h3>
      <h3>Our Values</h3>
      <p>
        <ul style={{ listStyleType: 'none' }}>
          <li>Trust</li>
          <li>Transparency</li>
          <li> Integrity</li>
          <li> Excellence</li>
        </ul>
      </p>
      <h3> Value to Customers</h3>
      <p>

        <ul style={{ listStyleType: 'none' }}><li> Wide Product Range</li>
          <li>Interest Calculation on Daily Reducing Balance</li>
          <li>Overdraft Facility available</li>
          <li>Low Interest Rates</li>
          <li>Low Processing Fees</li>
          <li> No Hidden Costs</li>
          <li>No Pre-payment penalty</li> </ul>
      </p>
      <h3>Our Presence</h3>
      <p>
        <ul style={{ listStyleType: 'none' }}>
          <li>24,000+ branches</li>
          <li>1600+ member strong dedicated Sales Team</li>
        </ul>
      </p>
      <h3>OUR</h3>
      <p>
        Features & Benefits</p>
        <p>
          <ul style={{ listStyleType: 'none' }}>
            <li>Packages of exclusive benefits</li>
            <li>Low Interest rates. Interest calculation on a daily reducing balance.</li>
            <li>Home loan also available as an overdraft. Optimally utilize your surplus funds.</li>
            <li>Low Processing charges. No hidden costs.</li>
            <li>No Prepayment penalties. Reduce your interest burden by prepaying the loan</li>
          </ul>
        </p>
    </div>
  )
}

export default AboutHomeLoan
// import React from 'react';
import "../styles/Pricing.css";

const plans = [
  {
    title: "Pro",
    price: "15",
    residents: "Upto 99 Resident",
    features: [
      "Visitor Management",
      "Notification Feature of Visitors Arrival",
      "Resident Approval on Visitors Arrival",
      "Manage Pre-Approved Visitors",
      "Manage Members and Employees of Society",
      "Vehicle Parking Management",
      "Notice and Complaint Management System",
    ],
  },
  {
    title: "Silver",
    price: "12",
    residents: "Upto 199 Resident",
    features: [
      "Visitor Management",
      "Notification Feature of Visitors Arrival",
      "Resident Approval on Visitors Arrival",
      "Manage Pre-Approved Visitors",
      "Manage Members and Employees of Society",
      "Vehicle Parking Management",
      "Notice and Complaint Management System",
    ],
  },
  {
    title: "Silver + (Best Value)",
    price: "10",
    residents: "Upto 499 Resident",
    features: [
      "Visitor Management",
      "Notification Feature of Visitors Arrival",
      "Resident Approval on Visitors Arrival",
      "Manage Pre-Approved Visitors",
      "Manage Members and Employees of Society",
      "Vehicle Parking Management",
      "Notice and Complaint Management System",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div className="pricing-subheading-container ">
        <h3 className="pricing-subheading font-serif">Lets Work Together!</h3>
      </div>

      <div id="pricing" className="pricing-section w-full myimage ">
        <div className="overlay flex justify-center items-center">
          <h2 className="section-title font-serif">Pricing</h2>
          <div className="pricing-cards">
            {plans.map((plan, idx) => (
              <div className="card" key={idx}>
                <div className="card-header">{plan.title}</div>
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="price">
                  <span className="currency">INR</span> {plan.price}
                  <div className="residents">{plan.residents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

 export const PricingSection = Pricing;

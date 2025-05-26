// import React from 'react';
import bgImage from '../assets/contbg.jpg'; // your background image path
import '../styles/Contact.css'; // Optional: extract styles here

const Contact = () => {
  return (
    <div id="contact" className="contact-wrapper">
      {/* Blurred Background */}
      <div
        className="contact-bg"
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      ></div>

      {/* Foreground Content */}
      <div className="contact-section">
        <h2 className="contact-title font-serif">Contact Us</h2>

        <div className="contact-content mt-10"> 
          <div className="contact-details font-serif mt-4 text-lg">
            <p><strong>SecureAwas App is Powered By</strong></p>
            <h3>Prynix Solutions Pvt. Ltd.</h3>
            <p>C-189, 2nd Floor, Tower No - 8,<br />Lemon City, Indore - 453111</p>
            <p>Phone No.: <a href="tel:02227578718">626 - 177 5520</a></p>
            <p>Mobile: <a href="tel:+919324030906">+91 7697187488</a></p>
            <p>Mobile: <a href="tel:+919324030906">+91 9425186097</a></p>
            <p>Email: <a href="mailto:info@prynix.com">info@prynix.com</a> 
              <a href="mailto:Support@prynix.com"> Support@prynix.com</a>
            </p>
          </div>

          <div className="contact-map">
            <iframe
              title="Lemon City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.366795482121!2d75.81808330919554!3d22.825915279225814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039a9fb46439%3A0x500c2a8d02e75619!2sLemon%20City!5e0!3m2!1sen!2sin!4v1746252798967!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Named export
export const ContactSection = Contact;

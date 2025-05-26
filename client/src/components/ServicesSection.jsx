// import React from 'react';
import "../styles/service.css";

const leftServices = [
  { icon: "🛡️", text: "Secure Your Society from unwanted element." },
  { icon: "✅", text: "Manage and track visitor details society wise." },
  { icon: "💬", text: "Manage Members Complains Fastly." },
];

const rightServices = [
  { icon: "🔔", text: "Mobile Notification and SMS before visitor reach." },
  { icon: "👥", text: "Manage details of Society, Members and Employees." },
  { icon: "🚗", text: "Resolve Parking issue Quickly by Security Guard." },
];

const Services = () => {
  return (
    <div
      id="services"
      className="services-section"
      style={{ backgroundImage: "url('/securityg.jpg')" }}
    >
      <div className="overlay  flex justify-center items-center">
        <div className="max-w-6xl mx-auto text-center  ">
          <h2 className="text-4xl font-bold text-white mb-12 drop-shadow-lg font-serif">
            Worthy Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left px-6 md:px-0">
            {/* Left column */}
            <ul className="space-y-6  ">
              {leftServices.map((service, index) => (
                <li key={index} className="service-item flex items-center gap-4">
                  <span className="service-icon-placeholder">
                    {service.icon}
                  </span>
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>

            {/* Right column */}
            <ul className="space-y-6">
              {rightServices.map((service, index) => (
                <li key={index} className="service-item flex items-center gap-4">
                  <span className="service-icon-placeholder">
                    {service.icon}
                  </span>
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection = Services;

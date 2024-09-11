import React from "react";
import calender from "../../assets/icons/calender.png";
import call from "../../assets/icons/call.png";
import location from "../../assets/icons/location.png";

const ContactSection = () => {
  return (
    <div className="p-6 md:flex justify-between items-center bg-black text-white md:p-24 rounded-md my-16">
      <div className="flex items-center gap-3">
        <img src={calender} alt="Calender" />
        <div className="text-left">
          <p>We are open on Monday - Friday</p>
          <p className="text-xl font-medium">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={call} alt="Call" />
        <div className="text-left">
          <p>Have a question?</p>
          <p className="text-xl font-medium">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={location} alt="Location" />
        <div className="text-left">
          <p>Need a repair? our address</p>
          <p className="text-xl font-medium">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

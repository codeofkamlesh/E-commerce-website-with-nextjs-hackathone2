import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import Styles from "../../Styles/ContactUs.module.css";
import "../../app/globals.css";


const ContactUs = () => {
  return (
    <div className={Styles.containor}>
      <div className={Styles.maindiv}>
        <div className={Styles.topitems}>
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className={Styles.belowitems}>
          <div className={Styles.leftdiv}>
            <div className={Styles.leftitems}>
              <i>
                <IoLocationSharp />
              </i>
              <div className={Styles.two}>
                <h2>Address</h2>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className={Styles.leftitems}>
              <i>
                <FaPhoneAlt />
              </i>
              <div className={Styles.two}>
                <h2>Phone</h2>
                <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className={Styles.leftitems}>
              <i>
                <FaClock />
              </i>
              <div className={Styles.two}>
                <h2>Working Hours</h2>
                <p>
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.rightdiv}>
            <form action="post">
              <div className={Styles.labinput}>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder="Abc" />
              </div>
              <div className={Styles.labinput}>
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Abc@def.com" />
              </div>
              <div className={Styles.labinput}>
                <label htmlFor="">Subject</label>
                <input type="text" placeholder="This is an optional" />
              </div>
              <div className={Styles.labinput}>
                <label htmlFor="">Message</label>
                <textarea placeholder="Hi! I'd like to ask about"></textarea>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={Styles.belowthree}>
        <div className={Styles.threeitems}>
          <div className={Styles.itm}>
            <i>
              <GrTrophy />
            </i>
            <div className={Styles.twin}>
              <h2>HIGH QUALITY</h2>
              <p>Crafted from top materials</p>
            </div>
          </div>

          <div className={Styles.itm}>
            <i>
              <BsCheckCircle />
            </i>
            <div className={Styles.twin}>
              <h2>Warranty Protection</h2>
              <p>Over 2 years</p>
            </div>
          </div>

          <div className={Styles.itm}>
            <i>
              <MdSupportAgent />
            </i>
            <div className={Styles.twin}>
              <h2>24/7 Support</h2>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import foter from "../Css/Foter.module.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Foter() {
  return (
    <div className={foter.orabtur}>
      <div className={foter.fotercontainer}>
        <div className={foter.fotertpa} >
          <h1 className={foter.foteryozuv} >UNLOCK ID PERKS</h1>
          <button className={foter.foterbutton}><h1 className={foter.fotteryouz}>SUBSCRIBE TO OUR NEWSLETTER</h1></button>
        </div>
        <div className={foter.asos2}>
          <div className={foter.quticha}>
            <div className={foter.icons}>
              <FaFacebookF className={foter.icccons} />
              <FaTwitter className={foter.icccons} />
              <FaYoutube className={foter.icccons} />
              <FaTelegramPlane className={foter.icccons} />
              <FaInstagram className={foter.icccons} />
            </div>
            <h1 className={foter.ortayoz}>inspriation Gallery</h1>
            <h1 className={foter.yozuv}>All manufacturer names, symbols, and descriptions, used in our images and text are used solely for identification purposes only. </h1>
          </div>
          <div className={foter.quticha}>
            <h1 className={foter.custom} >CUSTOMER SERVICE </h1>
            <h1 className={foter.Help}>Help Center</h1>
            <h1 className={foter.Help}>My Acount</h1>
            <h1 className={foter.Help}>Track My Order</h1>
            <h1 className={foter.Help}>Return Policy</h1>
            <h1 className={foter.Help}>Privacy Policy</h1>
            <h1 className={foter.Help}>Price Match</h1>
            <h1 className={foter.Help}>Contact Us</h1>
          </div>
          <div className={foter.quticha}>
            <h1 className={foter.custom}>INFORMATION </h1>
            <h1 className={foter.Help}>About Us</h1>
            <h1 className={foter.Help}>Guides & Articles</h1>
            <h1 className={foter.Help}>Customer Reviews</h1>
            <h1 className={foter.Help}>Coupon Codes</h1>
            <h1 className={foter.Help}>Gift Cards</h1>
            <h1 className={foter.Help}>In the News</h1>
            <h1 className={foter.Help}>Buy Wholesale</h1>
          </div>
          <div className={foter.quticha}>
            <h1 className={foter.custom}>CONTACTS </h1>
            <h1 className={foter.loacti} ><FaLocationDot /> CARID.com</h1>
            <h1 className={foter.corpa}>1 Corporate Drive</h1>
            <h1 className={foter.corpa}> Cranbury , NJ 08512</h1>
            <h1 className={foter.loacti} ><FaPhone /> Toll Free: 800.500.3274</h1>
            <h1 className={foter.tool}> international:1.609.642.4700</h1>
            <h1 className={foter.tool}> Fax:1.609.964.1983</h1>
            <h1 className={foter.loacti}><MdEmail /> Email:info@carid.com</h1>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Foter
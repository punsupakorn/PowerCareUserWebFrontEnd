import React,{useState} from 'react'
import { FiCode,FiMenu, FiX } from "react-icons/fi";
import './Header.css'


function Header(){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); //คลิกที่ลิงก์แล้วตัว menu มันสไลด์ออกไป
    return(
        <div className="header">
            <div className="container">
                <dic className="header-con">
                    <div className="logo-container">
                        <a href="#">Mook<FiCode/></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">About Me</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">About Me</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">About Me</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ?(
                            <FiX/>
                        ) : (
                            <FiMenu/>
                        )
                    }
                    </div>
                </dic>
            </div>

        </div>
    );
}
export default Header

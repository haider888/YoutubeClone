import React from 'react';
import './header.scss'
import { FaBars, FaBeer } from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications,MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
    <div className="logomenu">
    <FaBars className='header_menue' size={26}
    // onClick={()=>handleSidebar()}
    />
   <img src="images/logo.png" alt="" className="header_logo" />
    </div>
   
   <form action="">
       <input type="text" placeholder='Search' />
       <button type='submit'>
           <AiOutlineSearch size={22} />
      </button>
   </form>
   <div className="header_icons">
       <MdNotifications size={28} />
       <MdApps size={28} />
       <img src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar1_big.png" alt="Avatar img" className='avatar' />
   </div>
</div>

  );
};

export default Header;

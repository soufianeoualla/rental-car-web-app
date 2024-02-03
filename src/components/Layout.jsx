import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({isDark,setIsDark,favorite,menuClicked,setMenuClicked}) => {



  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}
      setMenuClicked={setMenuClicked} menuClicked={menuClicked} />
      <div className='wrapper px-5 grid sm:p-0'>
        <Sidebar isDark={isDark} favorite={favorite} menuClicked={menuClicked} setMenuClicked={setMenuClicked}  />

      
       
        <Outlet  />
      </div>
    </>
  );
};

export default Layout;

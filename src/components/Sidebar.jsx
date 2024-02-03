import { FiBell } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { GoQuestion, GoPackage } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { BsHeart, BsCalendar, BsCarFront } from "react-icons/bs";
import { Link } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useEffect, useState } from "react";

const Sidebar = ({ isDark, favorite, menuClicked, setMenuClicked }) => {
  const menuTop = [
    { icon: <RxDashboard />, path: "/dashbord" },
    { icon: <BsCarFront />, path: "/" },
    { icon: <BsCalendar />, path: "/calendar" },
    { icon: <BsHeart />, path: "/wishlist" },
    { icon: <GoPackage />, path: "/package" },
  ];

  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 639px)'); 

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener('change', handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  
  
  return (
    <>
      {(menuClicked || !isMobile) && (
        <div
          className={`sidebar text-xl flex flex-col items-center justify-between px-6 sm:fixed sm:py-12 sm:w-1/5 sm:h-screen sm:justify-center relative   ${
            isDark ? "sm:bg-dark" : "sm:bg-white "
          } sm:bottom-0 sm:p-4 z-10 `}
        >
          <button
            onClick={() => setMenuClicked(false)}
            className="absolute top-5 close-menu hidden sm:block"
          >
            <CloseRoundedIcon />
          </button>

          <div className='top grid gap-1    items-center  '>
            {menuTop.map((item, i) => (
              <Link key={item.path} to={item.path}>
                <div
                  className={`relative cursor-pointer  p-3 rounded-md ${
                    location.pathname === item.path
                      ? isDark
                        ? "bg-white text-dark sm:bg-dark sm:text-white"
                        : "bg-dark text-white sm:bg-transparent sm:text-dark"
                      : " "
                  }`}
                >
                  {item.icon}
                  {i === 3 && favorite.length > 0 && (
                    <div className='text-white flex justify-center items-center text-xs w-4 h-4 bg-blue rounded-full absolute top-2 right-2'>
                      {favorite.length}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className='bottom grid gap-1 '>
            <div className='notification relative p-4'>
              <FiBell className='relative flex justify-center items-center' />
              <span
                className={`bg-green w-2 h-2 rounded-full absolute top-4 right-4 ${
                  isDark ? "badge-dark" : "badge"
                }`}
              ></span>
            </div>
            <div className='p-4'>
              <GoQuestion />
            </div>
            <div className='p-4'>
              <LuSettings />
            </div>
            <div className='p-4'>
              <RiLogoutCircleRLine className='text-red ' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

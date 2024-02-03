import { CiLocationOn } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsMoon,BsSun  } from "react-icons/bs";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';




const Header = ({ isDark, setIsDark,setMenuClicked }) => {
  return (
    <header className='px-5 py-10 flex justify-between items-center sm:p-3'>
      <div className='logo flex-1 flex items-center gap-1 '>
        <button onClick={()=>setMenuClicked(true)}
         className="hidden sm:block">
          <MenuRoundedIcon/>
        </button>
      <Link to={'/'}>
        <h1 className={`text-4xl font-light sm:text-2xl ${isDark && "text-white"}`}>
          Starcar
        </h1>
      </Link>
      </div>

      <div
        onClick={() => setIsDark(!isDark)}
        className={` cursor-pointer toggle flex  p-1 font-medium   justify-between rounded-xl ${
          isDark ? "bg-white" : "bg-dark"
        } xs:hidden ` }
      >
        <div
          className={`text-xs light-mode flex justify-center items-center py-3  rounded-3xl bg-white   w-20  rounded-xl   ${
            isDark ? "text-dark" : ''
          }`}
        >
          Light mode
        </div>

        <div
          className={`text-xs dark-mode flex justify-center items-center py-3 rounded-3xl  w-20  rounded-xl  ${
            isDark ? "text-white bg-dark dark-mode  " : "text-white"
          }`}
        >
          Dark
        </div>
      </div>



      <div onClick={() => setIsDark(!isDark)}
       className={` hidden dark-mode-toggle p-2 rounded-md ${
        isDark ? "text-dark bg-white " : 'text-white bg-dark'
      } xs:block
      `}>

          {isDark && <BsSun className="text-xl"/>}
          {!isDark && <BsMoon className="text-xl"/>}
      </div>

      <div className='user flex gap-4 justify-end items-center flex-1 '>
        <div className='location flex items-center  text-gray text-xs md:hidden  '>
          <CiLocationOn className=' text-3xl' />
          Ouarzazate , MA
        </div>
        <div className='user-info flex gap-3'>
          <img
            className='w-10'
            src='src\components\assets\user-img.png'
            alt=''
          />
          <div className='name flex font-bold items-center gap-1 text-xs'>
            <span className=" xs:hidden" >Soufiane Oualla</span>
            <IoChevronDownSharp />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { IoChevronDownSharp,IoChevronUpSharp  } from "react-icons/io5";
const Color = ({selectedColor,setSelectedColor}) => {
  const colorsData = [
    {
      name: "black",
      color: "#000000",
    },
    {
      name: "silver",
      color: "#C0C0C0",
    },
    {
      name: "dark blue",
      color: "#1942A3",
    },
    {
      name: "white",
      color: "#ffffff",
    },
    {
      name: "gray",
      color: "#808080",
    },
    {
      name: "purple",
      color: "#DC84F3",
    },
    {
      name: "red",
      color: "#FF004D",
    },

    {
      name: "green",
      color: "#03C988",
    },
    {
      name: "orange",
      color: "#FFA447",
    },
    {
      name: "yellow",
      color: "#FFFC9B",
    },
  ];


  const handleColorUpdate= (i)=>{
    setSelectedColor( {i, color: colorsData[i].name } )
  }


  const[allColor,setAllColor]=useState(false)

  const colors = !allColor ? colorsData.slice(0,6) : colorsData

  return (
    <div className='color mt-5'>
      <span className='text-dark font-medium '>Color</span>
      <div className='ml-2  flex gap-4 flex-wrap mt-2 '>
        {colors.map((c,i) => (
          <div onClick={() => handleColorUpdate(i)}
            key={c.name}
            className={`color-item flex  items-center gap-2 mt-4 `}
            aria-label={`Select color ${c.name}`}
          >
            <div
              className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor && selectedColor.i === i && 'border-2  border-blue'}`}
              style={{ background: `${c.color}` }}
            ></div>
            <span className="text-dark capitalize">{c.name} </span>
          </div>
        ))}
      </div>
      <button onClick={()=>setAllColor(!allColor)}
       className='flex mx-auto my-4 justify-center items-center gap-3 text-blue'>
       {!allColor ? 'Show All ':'Show Less'}{!allColor ? <IoChevronDownSharp />: <IoChevronUpSharp/>}
      </button>
    </div>
  );
};

export default Color;

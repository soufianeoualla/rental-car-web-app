const Available = ({isAvailable,setIsAvailable}) => {

  return (
    <div className='available flex items-center gap-4 mt-5'>
      <span className='text-dark'>Available now only</span>
      <div
        onClick={() => setIsAvailable(!isAvailable)}
        className={`toggle-bar  w-10 h-6 rounded-lg relative flex justify-center items-center cursor-pointer ${
          isAvailable ? "bg-blue" : "bg-gray"
        }`}
      >
        <div
          className={`available-toggle bg-white absolute w-5 h-5 rounded-full  ${
            isAvailable && "is-available"
          }  `}
        ></div>
      </div>
    </div>
  );
};

export default Available;

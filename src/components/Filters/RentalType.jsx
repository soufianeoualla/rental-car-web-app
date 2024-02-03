const RentalType = ({rentalType,setRentalType}) => {
  const rentalTypes = ["Per day", "Per Hour"];

  return (
    <div className='rental-type mt-5'>
      <b className='text-dark'>Rental Type</b>
      <div className='mt-4 flex gap-2 items-center'>
        {rentalTypes.map((item, index) => (
          <button
            onClick={() => setRentalType(index)}
            key={item}
            className={` font-medium capitalize py-1 px-3 rounded-md ${
              rentalType === index ? "bg-blue text-white" : "bg-white text-dark"
            }`}
          >
            {" "}
            {item}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RentalType;

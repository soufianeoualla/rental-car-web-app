import { BsHeart, BsHeartFill } from "react-icons/bs";

const Wishlist = ({ favorite, handleFavoriteClick }) => {
  return (
    <>
    <div className='wishlist-wrapper h-screen  flex gap-2 flex-wrap justify-start items-center  sm:w-screen '>
      {favorite &&
        favorite.map((item) => (
          <div
            key={item}
            className='car-card-wishlist border-gray-off border-2 bg-white grid cursor-pointer w-1/4 h-72 p-3 rounded-lg xl:w-5/12 md:w-4/5 sm:w-5/12 xs:w-full'
          >
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                {item.car.model === "2024" && (
                  <span className='new text-white py-1 px-3 rounded-sm'>
                    New
                  </span>
                )}
                <span
                  className={`py-1 px-3 rounded-sm text-white ${
                    item.car.availability.available ? "bg-green" : "bg-gray"
                  }`}
                >
                  {item.car.availability.available === true
                    ? "Available"
                    : `Booked till ${item.car.availability.booked}`}{" "}
                </span>
              </div>
              <button onClick={() => handleFavoriteClick(item.index)}>
                {favorite.some((favCar) => favCar.index === item.index) ? (
                  <BsHeartFill className='text-blue text-2xl' />
                ) : (
                  <BsHeart className='text-blue text-2xl' />
                )}
              </button>
            </div>
            <div className='flex w-4/5 m-auto justify-center items-center'>
              <img src={item.car.image} alt='' />
            </div>

            <div className='flex justify-between items-end'>
              <div className='grid'>
                <span className='text-gray'>{item.car.company} </span>
                <b className='text-dark'>
                  {item.car.car}, {item.car.model}{" "}
                </b>
              </div>
              <div className='flex flex-wrap gap-2'>
                <span className='text-dark'>
                  <b>${item.car.rental.day}</b>
                  <small>/Day</small>
                </span>
                <span className='text-dark'>
                  <b>${item.car.rental.hour}</b>
                  <small>/Hour</small>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
   
    </>
  );
};

export default Wishlist;

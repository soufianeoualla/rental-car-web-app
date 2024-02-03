import { BsHeart, BsHeartFill } from "react-icons/bs";

const Wishlist = ({ favorite, handleFavoriteClick }) => {
  return (
    <div className='wishlist-wrapper flex gap-2 flex-wrap h-screen sm:w-screen'>
      {favorite &&
        favorite.map((item, index) => (
          <div
            key={item}
            className='car-card bg-white grid cursor-pointer h-72 p-3 rounded-lg sm:w-full'
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
              <button onClick={() => handleFavoriteClick(index)}>
                {favorite.some((favCar) => favCar.index === index) ? (
                  <BsHeartFill className='text-blue text-2xl' />
                ) : (
                  <BsHeart className='text-blue text-2xl' />
                )}
              </button>
            </div>
            <div className='flex justify-center items-center'>
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
  );
};

export default Wishlist;

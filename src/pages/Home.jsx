import CarChoice from "../components/Filters/CarChoice";
import Price from "../components/Filters/Price";
import Type from "../components/Filters/Type";
import Color from "../components/Filters/Color";
import Available from "../components/Filters/Available";
import RentalType from "../components/Filters/RentalType";
import CarInsurance from "../components/Filters/CarInsurance";
import { useEffect,  useState } from "react";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const Home = ({ carsData, isDark, favorite ,handleFavoriteClick }) => {
  
  const [filter, setFilter] = useState({});

  const handleCarChoice = (e) => {
    const value = e.target.value.toLowerCase();

    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  const [values, setValues] = useState([10, 100]);

  const [filtredCars, setFilteredCars] = useState([]);

  const [checkedType, setCheckedType] = useState([]);

  const [selectedColor, setSelectedColor] = useState();

  const [isAvailable, setIsAvailable] = useState(false);

  const [rentalType, setRentalType] = useState(0);

  const [selectedInsurance, setSelectedInsurance] = useState([]);

  const[ViewAll,setViewAll]=useState(false)

  useEffect(() => {
    const filterByGeneral = (item) =>
      Object.entries(filter).every(([key, value]) =>
        key === "company"
          ? item[key].toLowerCase().includes(value.toLowerCase())
          : item[key]
              .toString()
              .trim()
              .toLowerCase()
              .includes(value.trim().toLowerCase())
      );

    const filterByPrice = (car) =>
      car.rental &&
      parseFloat(car.rental.hour) >= values[0] &&
      parseFloat(car.rental.hour) <= values[1];

    const filterByType = (car) =>
      checkedType.length === 0 ||
      checkedType.some((item) => item.type === car.type);

    const filterByColor = (car) =>
      !selectedColor ||
      car.color.toLowerCase() === selectedColor.color.toLowerCase();

    const filterByInsurance = (car) =>
      selectedInsurance.length === 0 ||
      selectedInsurance.some((item) => item.insuranceType === car.insurance);

    const filterByAvailability = (car) =>
      !isAvailable || car.availability.available === true;

    const generalFilteredCars = carsData.filter(filterByGeneral);
    const priceFilteredCars = generalFilteredCars.filter(filterByPrice);
    const typeFilteredCars = priceFilteredCars.filter(filterByType);
    const colorFilteredCars = typeFilteredCars.filter(filterByColor);
    const insuranceFilteredCars = colorFilteredCars.filter(filterByInsurance);
    const availableCars = insuranceFilteredCars.filter(filterByAvailability);

    setFilteredCars(availableCars);
  }, [
    filter,
    carsData,
    values,
    isAvailable,
    checkedType,
    selectedInsurance,
    selectedColor,
  ]);

  const handleResetButton = () => {
    setValues([10, 100]);
    setCheckedType([]);
    setFilter({});
    setFilteredCars([]);
    setIsAvailable(false);
    setRentalType(0);
    setSelectedColor();
    setSelectedInsurance([]);
  };

  const cars = !ViewAll ? filtredCars.slice(0,6) : filtredCars


  return (
    <main className=' flex gap-4 sm:grid '>
      {!ViewAll && <div className='filters w-1/3 h-full bg-gray-off rounded-lg py-8 px-5 sm:w-screen sm:px-8 '>
        <div className='flex justify-between   items-center'>
          <h1 className="text-xl font-bold text-dark">Filters</h1>
          <button
            onClick={() => {
              handleResetButton();
            }}
            className='text-blue text-sm font-medium'
          >
            Reset
          </button>
        </div>

        <CarChoice handleCarChoice={handleCarChoice} />

        <Price values={values} setValues={setValues} />

        <span className='text-dark font-medium'>Type</span>
        <Type checkedType={checkedType} setCheckedType={setCheckedType} />

        <Color
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        <hr className='bg-gray-off opacity-10' />

        <Available isAvailable={isAvailable} setIsAvailable={setIsAvailable} />

        <RentalType rentalType={rentalType} setRentalType={setRentalType} />

        <CarInsurance
          selectedInsurance={selectedInsurance}
          setSelectedInsurance={setSelectedInsurance}
        />
      </div>}

      {carsData && (
        <div className={`cars w-2/3 ${ViewAll && 'w-full'} sm:p-5 sm:w-screen `}>
          <div className='top flex justify-between items-center'>
            <h1 className={`capitalize font-medium text-xl ${isDark && "text-white"} `}>
              {filtredCars.length} Cart to Rent
            </h1>
            <button onClick={()=>setViewAll(!ViewAll)}
             className='text-blue font-medium text-sm'>{ViewAll ? 'Show Less':'View All' }</button>
          </div>

          <div className='cars-list  w-full flex flex-wrap gap-4 mt-5'>
            {cars.map((item, index) => (
              <div
                key={item.car}
                className='car-card bg-white grid cursor-pointer  p-3 rounded-lg xl:w-5/12 md:w-4/5 sm:w-5/12 xs:w-full '
              >
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2  items-center'>
                    {item.model === "2024" && (
                      <span className='new text-white py-1 px-3 rounded-sm'>
                        New
                      </span>
                    )}
                    <span
                      className={`py-1 px-3 rounded-sm text-white ${
                        item.availability.available ? "bg-green" : "bg-gray"
                      }`}
                    >
                      {item.availability.available === true
                        ? "Available"
                        : `Booked till ${item.availability.booked}`}{" "}
                    </span>
                  </div>
                  <button onClick={() => handleFavoriteClick(index)}>
                    {favorite.some((favCar) => favCar.index === index) ? (
                      <BsHeartFill className="text-blue text-2xl " />
                    ) : (
                      <BsHeart className="text-blue text-2xl "/>
                    )}
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <img src={item.image} alt='' />
                </div>

                <div className='flex justify-between items-end '>
                  <div className='grid'>
                    <span className='text-gray'>{item.company} </span>
                    <b className=' text-dark'>
                      {item.car}, {item.model}{" "}
                    </b>
                  </div>

                  {rentalType === 0 ? (
                    <span className='text-dark'>
                      <b>${item.rental.day}</b>
                      <small>/Day</small>
                    </span>
                  ) : (
                    <span className='text-dark'>
                      <b>${item.rental.hour}</b>
                      <small>/Hour</small>
                    </span>
                  )}
                </div>
              </div>

              
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

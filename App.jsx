import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Package from "./pages/Package";
import Dashbord from "./pages/Dashbord";
import Calendar from "./pages/Calendar";

const getLocalStorage = () => {
  const favoriteCars = localStorage.getItem("favoriteCars");

  if (favoriteCars) {
    return JSON.parse(favoriteCars);
  } else {
    return [];
  }
};

function App() {
  const carsData = useMemo(
    () => [
      {
        car: "A-Class Limousine",
        company: "mercedes-benz",
        image: "https://imgd.aeplcdn.com/600x337/n/0fhnjbb_1685319.jpg?q=80",
        model: "2023",
        color: "White",
        insurance: "Collision damage waiver",
        type: "Sedan",
        rental: {
          hour: "22.30",
          day: "110.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "BMW 7 Series",
        company: "BMW",
        image: "https://imgd.aeplcdn.com/600x337/n/ilaho0b_1636471.jpg?q=80",
        model: "2024",
        color: "Black",
        insurance: "Collision damage waiver",
        type: "Sedan",
        rental: {
          hour: "30.30",
          day: "150.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Lexus ES",
        company: "Lexus",
        image: "https://imgd.aeplcdn.com/600x337/n/gobtisa_1467752.jpg?q=80",
        model: "2024",
        color: "Dark blue",
        insurance: "Roadside Plus",
        type: "Sedan",
        rental: {
          hour: "25.30",
          day: "130.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Mercedes-Benz GLA",
        company: "Mercedes-Benz",
        image:
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/169159/gla-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        model: "2022",
        color: "White",
        insurance: "Loss Damage Waiver",
        type: "SUV",
        rental: {
          hour: "24.80",
          day: "128.00",
        },
        availability: {
          available: false,
          booked: "10 PM",
        },
      },
      {
        car: "BMW M8",
        company: "BMW",
        image: "https://imgd.aeplcdn.com/600x337/n/rshssbb_1696329.jpg?q=80",
        model: "2022",
        color: "gray",
        insurance: "Roadside Plus",
        type: "Coupe",
        rental: {
          hour: "35.80",
          day: "190.00",
        },
        availability: {
          available: false,
          booked: "5 PM",
        },
      },

      {
        car: "Mercedes-Benz AMG E53 Cabriolet      ",
        company: "Mercedes-Benz",
        image: "https://imgd.aeplcdn.com/600x337/n/noklo0b_1636633.jpg?q=80",
        model: "2023",
        color: "White",
        insurance: "Collision damage waiver",
        type: "Convertible",
        rental: {
          hour: "32.80",
          day: "170.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "MINI Cooper",
        company: "MINI Cooper",
        image: "https://imgd.aeplcdn.com/600x337/n/i1n6i4a_1521587.jpg?q=80",
        model: "2021",
        color: "silver",
        insurance: "Roadside Plus",
        type: "Hatchback",
        rental: {
          hour: "20.80",
          day: "99.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "GMC HUMMER EV",
        company: "GMC",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/09dec975-0eef-4afc-a501-1a838734b8d9/bb16f684-0681-4a96-980c-e7328837ffe6.jpg",
        model: "2022",
        color: "orange",
        insurance: "Loss Damage Waiver",
        type: "Truck",
        rental: {
          hour: "28.80",
          day: "128.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Mercedes-Benz AMG G 63      ",
        company: "Mercedes-Benz",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/13848fe2-9599-40be-bca1-8936a079603b/77f62cb6-c05d-4e07-b104-80d048713b5b.jpg",
        model: "2022",
        color: "black",
        insurance: "Loss Damage Waiver",
        type: "SUV",
        rental: {
          hour: "40.80",
          day: "198.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Volkswagen Golf GTI      ",
        company: "Volkswagen",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/fd1e555a-47f6-4de5-b03a-2393d5efe0b6/8f79b415-62fe-42d7-9012-a1dd0a79e7ab.jpg",
        model: "2024",
        color: "red",
        insurance: "Roadside Plus",
        type: "Hatchback",
        rental: {
          hour: "20.80",
          day: "108.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "BMW Z4    ",
        company: "BMW",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/64e4530c-97b0-4f3e-80ca-948274f401ab/e7f2e79a-8e92-45e9-bb05-bdbb5e9c3981.jpg",
        model: "2023",
        color: "purple",
        insurance: "Loss Damage Waiver",
        type: "Convertible",
        rental: {
          hour: "34.80",
          day: "158.00",
        },
        availability: {
          available: false,
          booked: "2AM",
        },
      },

      {
        car: "Porsche 718 Cayman ",
        company: "porshe",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/ebfba1b3-abb1-40f7-afd7-f4fe07eddb41/5f3a0de1-0857-4d16-b0e7-338e837adc9a.jpg",
        model: "2023",
        color: "green",
        insurance: "Collision Damage Insurance      ",
        type: "Coupe",
        rental: {
          hour: "34.80",
          day: "158.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Kia K5 ",
        company: "Kia",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/e8632a46-08b4-4c66-ad9d-ae96511ca6d3/2bce1858-91a1-4454-b58e-c5294bdff53c.jpg",
        model: "2024",
        color: "gray",
        insurance: "Roadside Plus",
        type: "Sedan",
        rental: {
          hour: "18.80",
          day: "88.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Nissan Titan      ",
        company: "Nissan",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/a93261c0-b5df-4ab9-ad87-ae500417ed30/babb3b63-0a19-489f-94d2-87c6d840f2d1.jpg",
        model: "2024",
        color: "dark blue",
        insurance: "Roadside Plus",
        type: "Truck",
        rental: {
          hour: "25.80",
          day: "118.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },

      {
        car: "Hyundai IONIQ 5      ",
        company: "Hyundai",
        image:
          "https://www.cars.com/i/xlarge/in/v2/color_matched_stock_photos/5ffc4af3-8e90-4750-98ed-fec0aa1bcf64/c9801b95-5aba-43cc-ab78-d43f603e0607.jpg",
        model: "2024",
        color: "gray",
        insurance: "Collision Damage Insurance      ",
        type: "SUV",
        rental: {
          hour: "22.80",
          day: "112.00",
        },
        availability: {
          available: true,
          booked: "",
        },
      },
    ],
    []
  );

  const [isDark, setIsDark] = useState(false);

  const [favorite, setFavorite] = useState(getLocalStorage());

  
  const handleFavoriteClick = (index) => {

      const isSelected = favorite.some((item) => item.index === index);
  
      if (isSelected) {
        setFavorite(favorite.filter((item) => item.index !== index));
      } else {
        const selectedCar = carsData[index];
        setFavorite([{ index, car: selectedCar }, ...favorite]);
      }
    };
   

  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem("favoriteCars", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <>
      <div
        onClick={() => menuClicked && setMenuClicked(false)}
        className={`${menuClicked && "app-wrapper"} text-dark ${
          isDark && "bg-dark text-white"
        } `}
      >
        <div className='container pb-2 m-auto '>
          <Router>
            <Routes>
              <Route
                path='/'
                element={
                  <Layout
                    isDark={isDark}
                    setIsDark={setIsDark}
                    favorite={favorite}
                    menuClicked={menuClicked}
                    setMenuClicked={setMenuClicked}
                  />
                }
              >
                <Route
                  index
                  element={
                    <Home
                      isDark={isDark}
                      favorite={favorite}
                      handleFavoriteClick={handleFavoriteClick}
                      carsData={carsData}
                    />
                  }
                />
                <Route
                  path='/wishlist'
                  element={
                    <Wishlist
                      favorite={favorite}
                      handleFavoriteClick={handleFavoriteClick}
                    />
                  }
                />
                <Route path='/package' element={<Package />} />
                <Route path='/dashbord' element={<Dashbord />} />
                <Route path='/calendar' element={<Calendar />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;

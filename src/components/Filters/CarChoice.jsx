const CarChoice = ({ handleCarChoice }) => {
  const cars = [
    "Mercedes-Benz",
    "BMW",
    "Lexus",
    "MINI Cooper",
    "Nissan",
    "Hyundai",
    "Kia",
    "Porshe",
    "Volkswagen",
    "GMC",
  ];

  const carModel = ["2020", "2021", "2022", "2023", "2024"];

  return (
    <div className='flex justify-between flex-wrap flex-1    items-center gap-3 my-4'>
      <select
        onChange={handleCarChoice}
        name='car'
        id=''
        className='p-4 flex-1 rounded-xl outline-none text-dark'
      >
        <option value='' defaultValue>
          Choose Car
        </option>
        {cars.map((item) => (
          <option
            key={item}
            value={item}
            style={{ padding: "1rem", background: "#ffffff" }}
          >
            {item}
          </option>
        ))}
      </select>

      <select
        onChange={handleCarChoice}
        name='model'
        id=''
        className='p-4 flex-1 rounded-xl outline-none text-dark'
      >
        <option value='' defaultValue style={{ color: "#8D919F" }}>
          Car Model
        </option>
        {carModel.map((m) => (
          <option key={m} value={m} style={{ color: "#8D919F" }}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarChoice;

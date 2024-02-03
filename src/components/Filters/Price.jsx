import { Slider } from "@mui/material";

const Price = ({values,setValues}) => {


  const handleRangeChange = (event, newValue) => {
    setValues(newValue);
  };
  

  return (
    <div className='price-range'>
      <span className='text-dark font-medium'>Price range per Hour</span>

      <Slider
        className='mt-10'
        getAriaLabel={() => "Temperature range"}
        value={values}
        onChange={handleRangeChange}
        valueLabelDisplay='on'
      />
    </div>
  );
};

export default Price;

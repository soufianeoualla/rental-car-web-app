import { Checkbox } from "@mui/material";

const Type = ({ checkedType, setCheckedType }) => {
  const types = ["Sedan", "SUV", "Truck", "Convertible", "Hatchback", "Coupe"];

  const handleCheckChange = (index) => {
    const isSelected = checkedType.some((item) => item.index === index);

    if (isSelected) {
      setCheckedType(checkedType.filter((item) => item.index !== index));
    } else {
      const selectedType = types[index];
      setCheckedType([...checkedType, { index, type: selectedType }]);
    }
  };


  return (
    <div className='type flex flex-wrap gap-1 mt-4 '>
      {types.map((item, index) => (
        <div key={item}>
          <Checkbox
            onClick={() => handleCheckChange(index)}
            checked={checkedType.some((item) => item.index === index)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span className='text-dark'>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Type;

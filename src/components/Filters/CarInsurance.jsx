import { Checkbox } from "@mui/material";
import { useState } from "react";
import { IoChevronDownSharp,IoChevronUpSharp } from "react-icons/io5";

const CarInsurance = ({ selectedInsurance, setSelectedInsurance }) => {
  const insuranceType = [
    "Collision damage waiver",
    "Roadside Plus",
    "Loss Damage Waiver",
    "Collision Damage Insurance",
  ];

  const handleInsuranceChange = (index) => {
    const isSelected = selectedInsurance.some((item) => item.index === index);

    if (isSelected) {
      setSelectedInsurance(
        selectedInsurance.filter((item) => item.index !== index)
      );
    } else {
      const selectedType = insuranceType[index];
      setSelectedInsurance([
        ...selectedInsurance,
        { index, insuranceType: selectedType },
      ]);
    }
  };

  const[allInsurance,setAllInsurance]=useState(false)

  const insurance = !allInsurance ? insuranceType.slice(0,2) : insuranceType


  return (
    <div className='insurance mt-5'>
      <b className='text-dark'>Car Insurance</b>
      <div className='insurance-items flex flex-wrap mt-2 items-center gap-2'>
        {insurance.map((item, index) => (
          <div key={item} className="flex items-center">
            <Checkbox
              onClick={() => handleInsuranceChange(index)}
              checked={selectedInsurance.some((item) => item.index === index)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span className='text-dark'>{item}</span>
          </div>
        ))}
      </div>

      <button onClick={()=>setAllInsurance(!allInsurance)}
      className='flex mx-auto my-4 justify-center items-center gap-3 text-blue'>
      {!allInsurance ? 'Show All ':'Show Less'}{!allInsurance ? <IoChevronDownSharp />: <IoChevronUpSharp/>}
      </button>
    </div>
  );
};

export default CarInsurance;

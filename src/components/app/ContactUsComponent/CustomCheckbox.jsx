import { Checkbox, Box } from "@chakra-ui/react";
import { useState } from "react";

function CustomCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box display="flex" alignItems="flex-start" cursor="pointer" gap="8px">
      <Checkbox color="#A5A2C1" bg="transparent"  outline={"none"} borderRadius={"3px"} size='lg' borderColor={"#FFFFFF"}   _checked={{border:'',bg:"#1673FF",h:"20px", w:"20px"}} isChecked={isChecked} onChange={handleCheckboxChange} onClick={handleCheckboxChange} />
      <Box maxW={"602px"} color="#A5A2C1" fontSize="14px"
            fontWeight="400"
            lineHeight={"21px"} onClick={handleCheckboxChange}>
       I agree to the Terms & Conditions and Privacy Policy
      </Box>
    </Box>
  );
}

export default CustomCheckbox;

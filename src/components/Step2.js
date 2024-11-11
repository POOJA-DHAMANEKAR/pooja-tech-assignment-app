// Step2.js
import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const Step2 = ({ errors, register, setValue, watch }) => {
  //const wheels = watch("wheels");
  const selectedWheels = watch("wheels");
  return (
<FormControl component="fieldset" className="w-full mb-4" error={!!errors.wheels}>
    <FormLabel component="legend">Number of Wheels</FormLabel>
    <RadioGroup 
      row 
      //defaultValue={getValues("wheels") || ""}
      value={selectedWheels || ""}
      onChange={(e) => {
        setValue("wheels", e.target.value);
      }}
    >
      <FormControlLabel
        value="2"
        control={<Radio {...register("wheels", { required: "Please select number of wheels" })} />}
        label="2"
      />
      <FormControlLabel
        value="4"
        control={<Radio {...register("wheels", { required: "Please select number of wheels" })} />}
        label="4"
      />
    </RadioGroup>
    {errors.wheels && <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.wheels.message}</p>}
  </FormControl>
  );
}

export default Step2;

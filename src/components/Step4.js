// Step4.js
import React, { useEffect, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';

const Step4 = ({ errors, register, watch, setValue }) => {
  const [models, setModels] = useState([]);
  const selectedModel = watch("model"); // Watch for model field value

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get('http://localhost:4000/vehicles'); // Fetch all models
        setModels(response.data); // Assuming response.data is an array of models with { id, name }
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModels();
  }, []);

  return (
    <FormControl component="fieldset" className="w-full mb-4">
      <FormLabel component="legend">Specific Model</FormLabel>
      <RadioGroup row 
        //{...register("model", { required: "Please select a model" })} 
        value={selectedModel || ""} // Ensure the RadioGroup has a controlled value
        onChange={(e) => setValue("model", e.target.value)} // Update value when changed
      >
        {models.map((model, index) => (
          <FormControlLabel 
            key={index} 
            value={model}
            control={<Radio {...register("model", { required: "Please select model" })} />}
            label={model} />
        ))}
      </RadioGroup>
      {errors.model && <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.model.message}</p>}
    </FormControl>
  );
};

export default Step4;

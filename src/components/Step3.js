// Step3.js
import React, { useEffect, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, CircularProgress } from '@mui/material';
import axios from 'axios';

const Step3 = ({ errors, register, watch, setValue, getValues, trigger }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const wheels = watch("wheels");
  const selectedVehicleType = watch("vehicleType");

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/vehicle-types?wheels=${wheels}`);
        
        // Filter unique vehicle types by name
        const uniqueVehicleTypes = Array.from(new Map(response.data.map(type => [type.name, type])).values());
        setVehicleTypes(uniqueVehicleTypes);
      } catch (err) {
        setError("Failed to load vehicle types.");
      } finally {
        setLoading(false);
      }
    };
    if (wheels) fetchVehicleTypes();
  }, [wheels]);

  return (
    <FormControl
      component="fieldset"
      className="w-full mb-4"
      error={!!errors.vehicleType}
    >
      <FormLabel component="legend">Vehicle Type</FormLabel>
      {loading ? (
        <CircularProgress size={24} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <RadioGroup
          row
          value={selectedVehicleType || ""}
          onChange={(e) => {
            setValue("vehicleType", e.target.value);
          }}
        >
          {vehicleTypes.length > 0 ? (
            vehicleTypes.map((type) => (
              <FormControlLabel
                key={type.id}
                value={type.name}
                control={<Radio {...register("vehicleType", { required: "Please select type of vehicle" })} />}
                label={type.name}
              />
            ))
          ) : (
            <p>No vehicle types available for the selected wheel option.</p>
          )}
        </RadioGroup>
      )}
      {errors.vehicleType && (
        <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.vehicleType.message}</p>
      )}
    </FormControl>
  );
};

export default Step3;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { Button } from '@mui/material';

const steps = [Step1, Step2, Step3, Step4, Step5];

function VehicleRentalForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors }, watch, setValue, getValues, reset } = useForm();
  const [formData, setFormData] = useState({});
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null }); // Initialize date range

  const StepComponent = steps[currentStep];

  const handleNext = (data) => {
    // If advancing from Step 4 to Step 5, include dateRange values in formData
    const updatedData = currentStep === steps.length - 2
        ? { ...data, ...dateRange }
        : data;

    setFormData({ ...formData, ...updatedData });
    setCurrentStep((prev) => prev + 1);
};

  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    //const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
    /* const vehicleType = await VehicleType.findOne({ where: { name: data.vehicleType } });
    if(!vehicleType) 
    {
      throw new Error('Invalid vehicle type');
    } */
    const finalData = { ...formData, ...data, ...dateRange }; // Ensure dateRange is included here
    //console.log("Final Data:", finalData); // Log to verify

    try {
      await axios.post('http://localhost:4000/bookings', finalData);
      alert('Congrats, You have booked your vehicle successfully!');
      reset();
      setCurrentStep(0);
    } catch (error) {
      console.error('Error booking vehicle:', error.response?.data || error.message);
      alert(`Error booking vehicle: ${error.response?.data?.error || 'Please try again later.'}`);
    }
};

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Vehicle Rental Booking Form</h2>
      <form onSubmit={handleSubmit(currentStep === steps.length - 1 ? onSubmit : handleNext)}>
        <StepComponent 
          {...{ register, errors, watch, setValue, getValues }}
          setDateRange={setDateRange} // Pass setDateRange to Step5 as a prop
        />
        <div className="flex justify-center space-x-4 mt-4">
          {currentStep > 0 && (
            <Button variant="outlined" onClick={handlePrevious}>Previous</Button>
          )}
          <Button variant="contained" type="submit">
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VehicleRentalForm;

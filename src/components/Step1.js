/* // Step1.js
import React from 'react';
import { TextField } from '@mui/material';

const Step1 = ({ errors, watch, setValue }) => (
  <div className="flex flex-col items-center">
    <TextField
      label="First Name"
      {...register("firstName", { required: "First name is required" })}
      error={!!errors.firstName}
      helperText={errors.firstName?.message}
      className="mb-4"
    />
    <TextField
      label="Last Name"
      {...register("lastName", { required: "Last name is required" })}
      error={!!errors.lastName}
      helperText={errors.lastName?.message}
      className="mb-4"
    />
  </div>
);

export default Step1;
 */
// Step1.js
/* import React from 'react';
import { TextField } from '@mui/material';

const Step1 = ({ register, errors }) => (
  <div className="flex flex-col items-center">
    <TextField
      label="First Name"
      {...register("firstName", { required: "First name is required" })}
      error={!!errors.firstName}
      helperText={errors.firstName?.message}
      className="mb-5"
    />
    <TextField
      label="Last Name"
      {...register("lastName", { required: "Last name is required" })}
      error={!!errors.lastName}
      helperText={errors.lastName?.message}
      className="mb-4 mt-4"
      style={{ marginTop: '20px' }}
    />
  </div>
);

export default Step1; */

// Step1.js
import React from 'react';
import { TextField } from '@mui/material';

const Step1 = ({ register, errors }) => (
  <div className="flex flex-col items-center">
    <TextField
      label="First Name"
      {...register("firstName", { required: "First name is required" })}
      error={!!errors.firstName}
      helperText={errors.firstName?.message}
      className="mb-5"
    />
    <TextField
      label="Last Name"
      {...register("lastName", { required: "Last name is required" })}
      error={!!errors.lastName}
      helperText={errors.lastName?.message}
      className="mb-4"
      style={{ marginTop: '20px' }}
    />
  </div>
);

export default Step1;

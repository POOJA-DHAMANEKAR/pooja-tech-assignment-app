// Step5.js
import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale'; // Import locale for English (UK)
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Step5({ setDateRange }) { // Receive setDateRange as a prop
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setSelectedDateRange(ranges.selection);
  };

  // Update the date range in the parent component whenever selectedDateRange changes
  useEffect(() => {
    setDateRange({
      startDate: selectedDateRange.startDate,
      endDate: selectedDateRange.endDate,
    });
  }, [selectedDateRange, setDateRange]);

  return (
    <div style={{ width: '100%', margin: '0 0 0 0' }}>
      <DateRangePicker
        ranges={[selectedDateRange]}
        onChange={handleSelect}
        dateDisplayFormat="dd/MM/yyyy"
        locale={enGB}
        style={{ width: '100%' }}
      />
      <div>
        <p style={{ textAlign: 'center' }}>Selected Start Date: {format(selectedDateRange.startDate, 'dd/MM/yyyy')}</p>
        <p style={{ textAlign: 'center' }}>Selected End Date: {format(selectedDateRange.endDate, 'dd/MM/yyyy')}</p>
      </div>
    </div>
  );
}

export default Step5;

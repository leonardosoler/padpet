import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectComponent() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('sua-api.com/options')
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, ['sua-api.com/options']);

  return (
    <select>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default SelectComponent;
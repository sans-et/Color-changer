import React from 'react';
import Box from '@mui/material/Box';
import { Slider, TextField } from '@mui/material';

const ColorInput = ({ label, colorValues, onChange, max }) => {
  return (
    <div>
      <div className="names">{label}</div>
      <div className="button">
        {colorValues.map((value, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '350px' }}>
        
            <Slider
              sx={{ color: 'rgb(207, 237, 209)', marginRight: '10px', width: '300px' }}
              value={value}
              min={0}
              max={max}
              step={max === 255 ? 1 : 0.01}
              onChange={(e) => onChange(index, e.target.value)}
              valueLabelDisplay="auto"
              aria-labelledby="input-slider"
            />
    
            <TextField
              type="number"
              value={value}
              onChange={(e) => onChange(index, e.target.value)}
              inputProps={{
                min: 0,
                max: max,
                step: max === 255 ? 1 : 0.01,
              }}
              sx={{
                width: '100px',
                marginLeft: '10px',
                marginRight: '0px',
                input: { color: 'rgb(207, 237, 209)', height: '1px' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor:'rgb(207, 237, 209)', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(236, 107, 92)',  
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(236, 107, 92)', 
                  },
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorInput;

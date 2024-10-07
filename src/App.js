import React, { useState } from 'react';
import Box from '@mui/material/Box';
import chroma from 'chroma-js';
import './App.css';
import ColorInput from './Input';
import git from './github.png';
import { ChromePicker } from 'react-color';

function App() {
  const [rgb, setRGB] = useState([207, 237, 209]);
  const [cmyk, setCMYK] = useState(chroma.rgb(207, 237, 209).cmyk());
  const [hls, setHLS] = useState(chroma.rgb(207, 237, 209).hsl());

  const handleRGBChange = (index, value) => {
    const newRGB = [...rgb];
    newRGB[index] = Math.max(0, Math.min(255, Number(value)));
    setRGB(newRGB);

    const newCMYK = chroma.rgb(newRGB).cmyk();
    const newHLS = chroma.rgb(newRGB).hsl();
    setCMYK(newCMYK);
    setHLS(newHLS);
  };

  const handleCMYKChange = (index, value) => {
    const newCMYK = [...cmyk];
    newCMYK[index] = Math.max(0, Math.min(1, Number(value)));
    setCMYK(newCMYK);

    const newRGB = chroma.cmyk(...newCMYK).rgb();
    const newHLS = chroma.rgb(newRGB).hsl();
    setRGB(newRGB);
    setHLS(newHLS);
  };

  const handleHLSChange = (index, value) => {
    const newHLS = [...hls];
    newHLS[index] = Math.max(0, Math.min(1, Number(value)));
    setHLS(newHLS);

    const newRGB = chroma.hsl(...newHLS).rgb();
    const newCMYK = chroma.rgb(newRGB).cmyk();
    setRGB(newRGB);
    setCMYK(newCMYK);
  };

  const handleColorChange = (color) => {
    const newRGB = [color.rgb.r, color.rgb.g, color.rgb.b];
    setRGB(newRGB);

    const newCMYK = chroma.rgb(newRGB).cmyk();
    const newHLS = chroma.rgb(newRGB).hsl();
    setCMYK(newCMYK);
    setHLS(newHLS);
  };

  return (
    <div className="main">
      <header className="header">
        <h1>Color changer</h1>
      </header>
      
      <div className="content">

      <div className="colorColumn">
      <div
          className="color-circle"
          style={{
            backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
          }}
        />

<ChromePicker className='picker'
          color={{ r: rgb[0], g: rgb[1], b: rgb[2] }}
         
          onChange={handleColorChange}
        />
      </div>
        
        <div className="colors">
          <Box component="section" sx={{ p: 4, width: 350, height: 170, padding: '20px', borderRadius: 3, bgcolor: 'rgb(70, 72, 80)' }}>
            <ColorInput label="RGB" colorValues={rgb} onChange={handleRGBChange} max={255} />
          </Box>

          <Box component="section" sx={{ p: 4, width: 350, height: 200, padding: '20px', borderRadius: 3, bgcolor: 'rgb(70, 72, 80)' }}>
            <ColorInput label="CMYK" colorValues={cmyk} onChange={handleCMYKChange} max={1} />
          </Box>

          <Box component="section" sx={{ p: 4, width: 350, height: 200, padding: '20px', borderRadius: 3, bgcolor: 'rgb(70, 72, 80)' }}>
            <ColorInput label="HLS" colorValues={hls} onChange={handleHLSChange} max={1} />
          </Box>

         
          
     
        </div>
      </div>

      <footer className="footer">
        sans-et
        <img src={git} alt="github" className="git" />
      </footer>
    </div>
  );
}

export default App;

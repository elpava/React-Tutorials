import { useState, useEffect } from 'react';
import rgbToHex from './utils';

export default function SingleColor({ rgb, weight, index, list }) {
  const [alert, setAlert] = useState(false);
  const rgbColor = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`color ${index > 10 ? 'lightText' : ''}`}
      style={{ backgroundColor: `rgb(${rgbColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <h4>{`${weight}%`}</h4>
      <h4>{hex}</h4>
      {alert && <p>The Color Copied!</p>}
    </div>
  );
}

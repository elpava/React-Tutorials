import { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

import './styles.css';

export default function Index() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  const initialPickColor = `#${list[10].hex}`;

  function submitHandler(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <main>
      <header>
        <h2 className="title">Color Generator</h2>
        <form onSubmit={submitHandler}>
          <input
            className={`${error ? 'error' : ''}`}
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={e => setColor(e.target.value)}
          />
          <button type="submit">Submit</button>
          <input
            type="color"
            value={initialPickColor}
            list="profileColorsList"
            onChange={e => setList(new Values(e.target.value).all(10))}
          />
          <datalist id="profileColorsList">
            <option value="#C3B091" />
            <option value="#A40479" />
            <option value="#000B49" />
            <option value="#FFBD35" />
            <option value="#0FA404" />
          </datalist>
        </form>
      </header>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </section>
    </main>
  );
}

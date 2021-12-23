import { useState } from 'react';
import data from './data';
import Person from './Person';

import './styles.css';

export default function Index() {
  const [value, setValue] = useState(0);

  return (
    <main>
      <header className="header">
        <h1 className="title">Experience</h1>
        <div className="underline"></div>
      </header>
      <section className="container">
        <aside className="sideTabs">
          {data.map((item, index) => (
            <button
              key={index}
              className={`tabBtn ${value === index && 'active'}`}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          ))}
        </aside>
        <Person {...data[value]} />
      </section>
    </main>
  );
}

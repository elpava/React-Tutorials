import { useState, useEffect } from 'react';
import data from './data';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

import './styles.css';
import Info from './Info';

export default function Index() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main>
      <header className="header">
        <span>/</span>
        Reviews
      </header>
      <section className="sliderContainer">
        {data.map((person, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = 'lastSlide';
          }

          return <Info key={person.id} classMode={position} {...person} />;
        })}

        <div className="sliderBtnsSection">
          <button type="button" onClick={() => setIndex(index - 1)}>
            <BsFillArrowLeftSquareFill className="icon" />
          </button>
          <button type="button" onClick={() => setIndex(index + 1)}>
            <BsFillArrowRightSquareFill className="icon" />
          </button>
        </div>
      </section>
    </main>
  );
}

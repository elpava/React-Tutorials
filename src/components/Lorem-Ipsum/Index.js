import { Fragment, useState } from 'react';

import data from './data';

import './styles.css';

export default function Index() {
  const [generateData, setGenerateData] = useState([]);
  const [count, setCount] = useState(1);

  const isInvalid = { gt: false, lt: false };

  count > data.length - 1 ? (isInvalid.gt = true) : (isInvalid.gt = false);
  count < 0 ? (isInvalid.lt = true) : (isInvalid.lt = false);

  function handleSubmit(e) {
    e.preventDefault();

    if (count > 0 && count < data.length) {
      setGenerateData(data.slice(0, count));
    } else setGenerateData([]);
  }

  const alertMsg = (
    <Fragment>
      {isInvalid.gt && (
        <p className="alert">{`Please enter number below ${data.length}.`}</p>
      )}
      {isInvalid.lt && <p className="alert">Please enter number above 0.</p>}
    </Fragment>
  );

  return (
    <main>
      <section>
        <h2 className="title">tired of boring lorem ipsum?</h2>
        <form className="loremGenerator" onSubmit={handleSubmit}>
          <label className="labelInput" htmlFor="inputNumber">
            Paragraphs:
          </label>
          <input
            id="inputNumber"
            type="number"
            value={count}
            onChange={e => setCount(e.target.value)}
          ></input>
          <button className="generateBtn">generate</button>
          {alertMsg}
        </form>
        {generateData.map((data, index) => {
          return <article key={index}>{data}</article>;
        })}
      </section>
    </main>
  );
}

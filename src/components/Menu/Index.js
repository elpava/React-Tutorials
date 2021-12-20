import { useState } from 'react';
import data from './data';
import FoodsList from './FoodsList';
import FilterMenu from './FilterMenu';

import './styles.css';

const allCategories = ['all', ...new Set(data.map(item => item.type))];

export default function Index() {
  const [foodData, setFoodData] = useState(data);

  function filterMenuHandler(type) {
    if (type === 'all') {
      setFoodData(data);
      return;
    }
    const filteredData = data.filter(item => item.type === type);
    setFoodData(filteredData);
  }

  return (
    <main>
      <section className="container">
        <header className="header">
          <h3 className="title">our menu</h3>
          <span className="underline"></span>
        </header>
        <FilterMenu categories={allCategories} filter={filterMenuHandler} />
        <FoodsList data={foodData} />
      </section>
    </main>
  );
}

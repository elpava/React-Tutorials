import { useState } from 'react';
import Layout from '../Layout/Layout';
import Item from './Item';
import data from './data';
import './Index.css';

export default function Index() {
  const [personsData, setPersonsData] = useState(data);

  const items = personsData.map(item => (
    <Item
      key={item.id}
      personName={item.name}
      personAge={item.age}
      imageName={item.image}
    />
  ));

  function clearItemsHandler() {
    setPersonsData([]);
  }

  return (
    <main>
      <Layout className="reminder">
        <h3 className="reminder-counter">5 Birthdays Today</h3>
        {items}
        <button type="submit" onClick={clearItemsHandler}>
          Clear All
        </button>
      </Layout>
    </main>
  );
}

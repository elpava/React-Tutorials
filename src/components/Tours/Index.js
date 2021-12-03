import { useState, useEffect, Fragment } from 'react';

import toursData from './store/toursData';
import Tour from './Tour';
import './styles.css';

export default function Index() {
  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let tours, header, loading;

  function getData() {
    setTourData(toursData);
    setIsLoading(false);
  }

  useEffect(() => {
    setTimeout(() => getData(), 1000);
  }, []);

  function notInterestedHandler(id) {
    const filteredTour = tourData.filter(tour => {
      return tour.id !== id;
    });
    setTourData(oldData => filteredTour);
  }

  function refreshToursDataHandler() {
    setIsLoading(true);

    setTimeout(() => getData(), 1000);
  }

  header = (
    <Fragment>
      <h2 className="header">our tours</h2>
      <div className="underline"></div>
    </Fragment>
  );

  if (tourData.length === 0) {
    if (isLoading) {
      loading = <h2 className="loading">Loading...</h2>;
    }

    header = (
      <Fragment>
        <h2 className="header">No Tours Left</h2>
        <button className="refresh-btn" onClick={refreshToursDataHandler}>
          Refresh
        </button>
      </Fragment>
    );
  }
  tours = tourData.map(tour => {
    return <Tour key={tour.id} tour={tour} ignoreBtn={notInterestedHandler} />;
  });

  return (
    <main>
      <section>
        <div className="title">{loading || header}</div>
        {tours}
      </section>
    </main>
  );
}

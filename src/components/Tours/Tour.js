import { useState } from 'react';
import Layout from '../Layout/Layout';

export default function Tour(props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const altImg = props.tour.image.split('.')[0].replace('-', ' ');
  const formatedPrice = props.tour.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let description;

  function clickHandler() {
    props.ignoreBtn(props.tour.id);
  }

  function toggleIsReadMore() {
    setIsReadMore(!isReadMore);
  }

  description = isReadMore
    ? props.tour.description.slice(0, 200) + ' ...'
    : props.tour.description;

  return (
    <Layout className="tour-card">
      <img
        src={require(`../../assets/${props.tour.image}`).default}
        alt={altImg}
        className="tour-image"
      />
      <section className="tour-container">
        <div className="tour-header">
          <h4 className="tour-title">{props.tour.title}</h4>
          <span className="tour-price">${formatedPrice}</span>
        </div>
        <p className="tour-info">
          {description}
          <span onClick={toggleIsReadMore} className="more-or-less">
            {isReadMore ? 'Read More' : 'Less More'}
          </span>
        </p>
        <button type="submit" className="ignore-btn" onClick={clickHandler}>
          not interested
        </button>
      </section>
    </Layout>
  );
}

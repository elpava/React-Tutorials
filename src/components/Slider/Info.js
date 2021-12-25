import { FaQuoteRight } from 'react-icons/fa';

export default function Info({
  image,
  name,
  position,
  description,
  classMode,
}) {
  return (
    <article className={classMode}>
      <div className="imageSection">
        <img
          src={require(`../../assets/${image}`).default}
          alt="phote"
          className="image"
        />
      </div>
      <div className="infoSection">
        <h4 className="fullName">{name}</h4>
        <h4 className="job">{position}</h4>
        <p className="description">{description}</p>
        <FaQuoteRight className="quoteIcon" />
      </div>
    </article>
  );
}

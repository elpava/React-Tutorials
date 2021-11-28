import './Item.css';

export default function Item(props) {
  return (
    <div className="reminder-wrapper">
      <img
        src={require(`../../assets/${props.imageName}`).default}
        alt="friend"
        className="reminder-image"
      />
      <div>
        <h4 className="person-name">{props.personName}</h4>
        <p className="person-age">{props.personAge}</p>
      </div>
    </div>
  );
}

export default function SingleFood({ image, foodName, price, info }) {
  return (
    <section className="menuItem">
      <img
        src={require(`../../assets/${image}`).default}
        alt={foodName}
        className="foodImage"
      />
      <div className="foodContainer">
        <header className="foodHeader">
          <h4 className="foodName">{foodName}</h4>
          <h4 className="foodPrice">${price}</h4>
        </header>
        <p className="foodInfo">{info}</p>
      </div>
    </section>
  );
}

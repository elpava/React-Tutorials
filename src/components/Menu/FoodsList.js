import SingleFood from './SingleFood';

export default function FoodsList(props) {
  const singleFood = props.data.map(item => {
    return <SingleFood key={item.id} {...item} />;
  });

  return <section className="menuItems">{singleFood}</section>;
}

export default function FilterMenu({ categories, filter }) {
  return (
    <ul className="filterMenu">
      {categories.map((category, index) => (
        <li
          key={index}
          className="filterMenuItem"
          onClick={() => filter(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

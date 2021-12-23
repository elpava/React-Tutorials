export default function Person({ job, company, experience, abilities }) {
  return (
    <article className="info">
      <h3 className="personTitle">{job}</h3>
      <h4 className="personCompany">{company}</h4>
      <h4 className="personDate">{experience}</h4>
      <ul className="personAbilities">
        {abilities.map((item, index) => (
          <li key={index} className="personAbility">
            {item}
          </li>
        ))}
      </ul>
      <button className="moreBtn">More Info</button>
    </article>
  );
}

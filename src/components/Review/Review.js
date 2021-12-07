import { Fragment } from 'react';

export default function Review(props) {
  return (
    <Fragment>
      <div className="imageContainer">
        <img
          src={require(`../../assets/${props.person.image}`).default}
          alt="person"
          className="personImg"
        />
      </div>
      <h4 className="personName">{props.person.fullName}</h4>
      <h4 className="personJob">{props.person.position}</h4>
      <p className="personInfo">{props.person.description}</p>
      <div className="pagination">
        <i
          className="fa-solid fa-angle-left icon"
          onClick={props.previousBtn}
        ></i>
        <i className="fa-solid fa-angle-right icon" onClick={props.nextBtn}></i>
      </div>
      <button className="surpriseBtn" onClick={props.supriseBtn}>
        Surprise Me
      </button>
    </Fragment>
  );
}

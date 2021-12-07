import { useState, useRef } from 'react';
import personData from './data';
import Review from './Review';

export default function Reviews() {
  const [persons, setPersons] = useState(personData);
  const [currentPerson, setCurrentPerson] = useState(persons[0]);
  const oldPosition = useRef();
  // let randomNumber, oldPosition;
  let randomNumber;

  function nextPersonHandler() {
    let next = currentPerson.id + 1;
    if (next === persons.length) {
      next = 0;
    }
    setCurrentPerson(persons[next]);
  }
  function previousPersonHandler() {
    let previous = currentPerson.id - 1;
    if (previous < 0) {
      previous = persons.length - 1;
    }
    setCurrentPerson(persons[previous]);
  }
  function supriseMeHandler() {
    do {
      randomNumber = Math.floor(Math.random() * persons.length);
    } while (randomNumber === oldPosition.current);
    oldPosition.current = randomNumber;
    setCurrentPerson(persons[randomNumber]);
  }

  return (
    <article className="reviews">
      <Review
        person={currentPerson}
        nextBtn={nextPersonHandler}
        previousBtn={previousPersonHandler}
        supriseBtn={supriseMeHandler}
      />
    </article>
  );
}

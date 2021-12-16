import Answer from './Answer';
import data from './data';

export default function Answers() {
  //   const [answersData, setAnswersData] = useState(data);

  const answers = (
    <ul>
      {data.map(item => {
        return (
          <Answer key={item.id} question={item.question} answer={item.answer} />
        );
      })}
    </ul>
  );

  return answers;
}

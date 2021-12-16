import { useState } from 'react';

export default function Answer(props) {
  const [isShowParagraph, setIsShowParagraph] = useState(false);

  function showParagraphHandler() {
    setIsShowParagraph(prevState => !prevState);
  }

  return (
    <li className="container">
      <div className="questionHeader">
        <h4 className="question">{props.question}</h4>
        <button className="btn" onClick={showParagraphHandler}>
          {isShowParagraph ? (
            <i className="fas fa-minus icon"></i>
          ) : (
            <i className="fas fa-plus icon"></i>
          )}
        </button>
      </div>
      {isShowParagraph ? <p className="answer">{props.answer}</p> : null}
    </li>
  );
}

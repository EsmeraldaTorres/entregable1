import "./styles.css/QuoteBox.css";
const QuoteBox = ({ quote, handleChangeQuote, currentCookie, translates }) => {
  const { phrase, author } = quote;
  return (
    <article className="quotebox">
      <h1 className="quotebox_title">Fortune cookies</h1>
      <div className="quotebox_box">
        <p className="quotebox_phrase">{phrase}</p>
      </div>
      <button className="quotebox_btn" onClick={handleChangeQuote}>
        Ver otro
      </button>
      <img
        src={`/images/${currentCookie}`}
        alt=""
        className={`cookie ${translates}`}
      />
      <span className="quotebox_author">{author}</span>
    </article>
  );
};

export default QuoteBox;

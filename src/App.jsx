import "./App.css";
import { useState } from "react";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";
import QuoteBox from "./components/QuoteBox";
const bgs = ["bg1", "bg2", "bg3", "bg4"];
const elementsCookies = [
  "cookie1.png",
  "cookie2.png",
  "cookie3.png",
  "cookie4.png",
];
const translatePosition = ["translate0", "translateRight", "translateLeft"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs));
  const [currentCookie, setCurrentCookie] = useState(
    getRandomElement(elementsCookies)
  );
  const [translates, setTranslates] = useState(
    getRandomElement(translatePosition)
  );

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(bgs));
    setCurrentCookie(getRandomElement(elementsCookies));
    setTranslates(getRandomElement(translatePosition));
  };

  return (
    <>
      <main className={`app ${currentBg}`}>
        <QuoteBox
          quote={quote}
          handleChangeQuote={handleChangeQuote}
          currentCookie={currentCookie}
          translates={translates}
        />
      </main>
    </>
  );
}

export default App;

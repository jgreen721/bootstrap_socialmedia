import React, { useState, useEffect } from "react";

const QuotesCard = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function fetchQuotes() {
      if (!localStorage["quotes"]) {
        var temp_quotes = [];

        for (let i = 0; i < 5; i++) {
          let response = await fetch("https://api.adviceslip.com/advice");
          let data = await response.json();
          console.log(data);
          temp_quotes.push({ id: data.slip.id, quote: data.slip.advice });
        }
        console.log(temp_quotes);
        localStorage.setItem("quotes", JSON.stringify(temp_quotes));
        setQuotes(temp_quotes);
        return temp_quotes;
      } else {
        console.log("some quotes down in LS");
        setQuotes(JSON.parse(localStorage.getItem("quotes")));
        console.log(quotes);
        return quotes;
      }
    }

    fetchQuotes();
  }, []);

  const refreshQuotes = async () => {
    var temp_quotes = [];

    for (let i = 0; i < 5; i++) {
      let response = await fetch("https://api.adviceslip.com/advice");
      let data = await response.json();
      console.log(data);
      temp_quotes.push({ id: data.slip.id, quote: data.slip.advice });
    }
    console.log(temp_quotes);
    localStorage.setItem("quotes", JSON.stringify(temp_quotes));
    setQuotes(temp_quotes);
  };
  return (
    <div className="quotes-card p-3">
      <div className="d-flex align-items-center">
        <h4 className="bold-h4">QuotesCard -</h4>
        <button
          disabled
          onClick={refreshQuotes}
          className="text-primary ms-3 mb-2 border-0 bg-transparent"
        >
          Refresh
        </button>
      </div>
      {quotes.map((f) => (
        <div
          className="m-1 d-flex flex-column align-items-start justify-content-between follower-item"
          key={f.id}
        >
          <p className="m-0">
            <strong>{f.quote}</strong>
          </p>
          <p className="opacity-50">{(Math.random() * 8) | (0 + 1)}hr</p>
        </div>
      ))}
    </div>
  );
};

export default QuotesCard;

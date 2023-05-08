const Library = ({ quote, fetchQuote }) => {
    return (
        <div>
          <button onClick={fetchQuote}>Get Random Quote</button>
            <p>{quote}</p>
        </div>
    );
};

export default Library;
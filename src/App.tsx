import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{
          width: "250px",
          // height: "100px",
          paddingBottom: "75%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/Ju7l5y9osyymQ"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ"></a>
      </p>
    </div>
  );
}

export default App;

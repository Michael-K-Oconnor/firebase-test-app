import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<string | null>();

  let src;
  if (user == "Andrew") src = "https://giphy.com/embed/Ju7l5y9osyymQ";
  if (user == "Noelle") src = "https://giphy.com/embed/Vd2gLJCBhfnPSk48r5";
  if (user == "Edmund") src = "https://giphy.com/embed/fkD36jhiqzJ9m";

  return (
    <div style={{ width: "80vw" }}>
      <div>Choose User</div>
      <div>
        <button onClick={() => setUser("Andrew")}>Andrew</button>
        <button onClick={() => setUser("Noelle")}>Noelle</button>
        <button onClick={() => setUser("Edmund")}>Edmund</button>
      </div>
      <div
        style={{
          width: "100%",
          // height: "100px",
          paddingBottom: "75%",
          position: "relative",
        }}
      >
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;

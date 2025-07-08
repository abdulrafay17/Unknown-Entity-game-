import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [enterPLayerName, setEnterPlayerName] = useState('');

  function submitBtn() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { enterPLayerName ? enterPLayerName : "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={submitBtn}>Set Name</button>
      </p>
    </section>
  );
}

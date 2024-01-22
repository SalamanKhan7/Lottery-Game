import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({ n, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div>
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h3>{isWinning && "Congratulation, you won"}</h3>
    </div>
  );
}

import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import { v4 } from 'uuid';

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
import React from "react";
import PropTypes from "prop-types";

function TicketDetail({ticket, onClickingDelete}){

  return (
    <div>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr/>
      <button onClick={() => onClickingDelete(ticket.id)}>Delete</button>
    </div>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default TicketDetail;
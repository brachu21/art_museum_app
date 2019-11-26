import React from 'react';
import CounterComponent from "../counter/CounterComponent";
import HintText from '../../components/hint/HintText';
import Calendar from "../counter/Calendar";

class TicketCalendar extends React.Component {
    state = {};

    render() {
        return (
            <>
                <div style={{width: '70%', marginTop: '24px'}}>
                    <h2 style={{margin: 0}}>Skip the Line.<br/>Purchase Tickets.</h2>
                    <HintText>All exhibitions, audio tours, and films included in the price of admission.</HintText>
                </div>
                <Calendar/>
                <CounterComponent/>
            </>
        )
    }
}

export default TicketCalendar;

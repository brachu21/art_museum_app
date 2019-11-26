import React from 'react';
import {
    CalendarComponent
    , ActivePosition
    , DisablePosition
    , DateComponent
    , Stroke
    , StrokeActive
} from './CalendarComponent';

const Calendar = () => (
    <CalendarComponent>
        <DisablePosition>
            <p>Today</p>
            <Stroke/>
        </DisablePosition>
        <ActivePosition>
            <p>Tommorow</p>
            <DateComponent>March 22, 2016<br/>Open 10:30am-5:30pm</DateComponent>
            <StrokeActive/>
        </ActivePosition>
        <DisablePosition>
            <p> Other </p>
            <Stroke/>
        </DisablePosition>
    </CalendarComponent>
);
export default Calendar;

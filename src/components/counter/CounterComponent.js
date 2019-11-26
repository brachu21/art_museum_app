import React, {useState} from 'react';
import Button from '../button/button';
import Summary from "./Summary";
import {StyledCounter, StyledCounterSection, StyledIncrementor} from "./StyledCounter";
import Icon from '../icons/CounterTemplate';


const CounterComponent = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [seniorCount, setSeniorCount] = useState(0);
    const [studentsCount, setStudentsCount] = useState(0);

    function incrementAdult() {
        setAdultCount(adultCount + 1);
    }

    function decrementAdult() {
        if (adultCount === 0 || adultCount < 0) {
            setAdultCount(0);
        } else {
            setAdultCount(adultCount - 1);
        }
    }

    function incrementStudent() {
        setStudentsCount(studentsCount + 1);
    }

    function decrementStudent() {
        if (studentsCount === 0 || studentsCount < 0) {
            setStudentsCount(0);
        } else {
            setStudentsCount(studentsCount - 1);
        }
    }

    function incrementSenior() {
        setSeniorCount(seniorCount + 1);
    }

    function decrementSenior() {
        if (seniorCount === 0 || seniorCount < 0) {
            setSeniorCount(0);
        } else {
            setSeniorCount(seniorCount - 1);
        }
    }

    return (
        <>
            <div style={{padding: '18px'}}>

                <StyledCounterSection>
                    <StyledCounter>
                        <p>Adults</p>
                        <a></a>
                    </StyledCounter>

                    <StyledIncrementor quantity={adultCount > 0}>
                        <Icon onClick={() => decrementAdult()}>-</Icon>
                        <p>{adultCount}</p>
                        <Icon onClick={() => incrementAdult()}>+</Icon>
                    </StyledIncrementor>
                </StyledCounterSection>

                <StyledCounterSection>
                    <StyledCounter>
                        <p>Seniors</p>
                        <a>65+ with ID</a>
                    </StyledCounter>

                    <StyledIncrementor quantity={seniorCount > 0}>
                        <Icon onClick={() => decrementSenior()}>-</Icon>
                        <p>{seniorCount}</p>
                        <Icon onClick={() => incrementSenior()}>+</Icon>
                    </StyledIncrementor>
                </StyledCounterSection>

                <StyledCounterSection>
                    <StyledCounter>
                        <p>Students</p>
                        <a>with ID</a>
                    </StyledCounter>

                    <StyledIncrementor quantity={studentsCount > 0}>
                        <Icon onClick={() => decrementStudent()}>-</Icon>
                        <p>{studentsCount}</p>
                        <Icon onClick={() => incrementStudent()}>+</Icon>
                    </StyledIncrementor>
                </StyledCounterSection>
            </div>
            <Summary cost={(adultCount * 8) + (seniorCount * 8 / 2) + (studentsCount * 8 / 2)}/>
            <Button style={{margin: 'auto'}}>Continue to Payment</Button>
        </>
    );
};

export default CounterComponent;

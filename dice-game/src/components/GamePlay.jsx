import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button } from '../styled/Button';
import Rules from './Rule';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        setError("");
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice(randomNumber);
        console.log(selectedNumber + " , " + randomNumber);
        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    };

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score}></TotalScore>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}></NumberSelector>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
            <div className="btns">
                <Button onClick={resetScore}>Reset Score</Button>
                <Button onClick={() => setShowRules((prev) => !prev)}>
                    {showRules ? "Hide" : "Show"} Rules
                </Button>
            </div>

            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

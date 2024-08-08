import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RoleDice from './RoleDice';

const GamePlay = () => {
    const [score, setScore] = useState();
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState();

    const generateRanDomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

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
                <TotalScore></TotalScore>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
            </div>
            <RoleDice currentDice={setCurrentDice} roleDice={roleDice}></RoleDice>
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

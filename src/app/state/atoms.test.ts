
import  '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { questionInputs, resultContentResponse } from './atoms';
import { useRecoilState, useRecoilValue } from 'recoil';


describe('recoil atoms state tests', () => {
    test(' return correct content and styling when button clicked if answer is correct', () => {
       const [_questionInputState, setQuestionInputState] = useRecoilState(questionInputs);
       
        setQuestionInputState([{
            buttonClicked: true,
            isCorrect: true,
            isValid: true,
            inputValue: 0,
            startingUnit: '',
            endingUnit: '',
            correctAnswer: 0,
            studentAnswer: 0
        }])

    const actualResponse = useRecoilValue(resultContentResponse);
    const expectedResponse = {content: {text: "Correct"}, styling: {border: "border-green-600", color: "text-green-600"} }

    expect(actualResponse).toEqual(expectedResponse);

    })
})



import  '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { questionInputs, resultContentResponse } from './atoms';
import { useRecoilValue } from 'recoil';


describe('recoil atoms state tests', () => {
    test(' return correct content and styling when button clicked if answer is correct', () => {
       set questionInputs to:
        buttonClicked: true,
        isCorrect: true,
        isValid: true,
    
    const actualRespnse = useRecoilValue(resultContentResponse);
    const expectedResponse = {content: {text: "Correct"}, styling: {border: "border-green-600", color: "text-green-600"} }

    expect(actualRespnse).toEqual(expectedResponse);

    })
})


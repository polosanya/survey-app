import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SurveyAnswer } from '../types/survey';

interface SurveyState {
    answers: SurveyAnswer[];
    currentStep: string;
}

const initialState: SurveyState = {
    answers: [],
    currentStep: '',
};

export const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        setAnswer: (state, action: PayloadAction<SurveyAnswer>) => {
            const existingAnswerIndex = state.answers.findIndex(
                (answer) => answer.stepId === action.payload.stepId
            );

            if (existingAnswerIndex !== -1) {
                state.answers[existingAnswerIndex] = action.payload;
            } else {
                state.answers.push(action.payload);
            }
        },
        setCurrentStep: (state, action: PayloadAction<string>) => {
            state.currentStep = action.payload;
        },
        resetSurvey: (state) => {
            state.answers = [];
            state.currentStep = '';
        },
    },
});

export const { setAnswer, setCurrentStep, resetSurvey } = surveySlice.actions;
export default surveySlice.reducer;

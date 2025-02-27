import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SurveyAnswer } from '../types/survey';

interface SurveyState {
  answers: SurveyAnswer[];
}

const initialState: SurveyState = {
  answers: [],
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
    resetSurvey: (state) => {
      state.answers = [];
    },
  },
});

export const { setAnswer, resetSurvey } = surveySlice.actions;
export default surveySlice.reducer;

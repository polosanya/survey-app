import { SurveyConfig } from '@/types/survey';
import mainSurvey from './main_survey.json';
import userSurvey from './user_survey.json';

export const SURVEYS: Record<string, SurveyConfig> = {
  main_survey: mainSurvey as SurveyConfig,
  user_survey: userSurvey as SurveyConfig,
};
export type SurveyId = keyof typeof SURVEYS;

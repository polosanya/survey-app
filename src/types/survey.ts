export type ScreenType = 'single-choice' | 'summary' | 'info';

export interface SurveyOption {
  id: string;
  text: string;
  nextStep?: string;
}

export interface SurveyStep {
  id: string;
  type: ScreenType;
  title?: string;
  question?: string;
  description?: string;
  options?: SurveyOption[];
  nextStep?: string;
}

export type Steps = Record<string, SurveyStep>;

export interface SurveyConfig {
  id: string;
  name: string;
  steps: Steps;
  initialStep: string;
}

export interface SurveyAnswer {
  stepId: string;
  answer: string;
}

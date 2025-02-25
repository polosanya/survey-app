import { redirect } from 'next/navigation';
import mainSurvey from '@/config/surveys/main-survey.json';
import { SurveyConfig } from '@/types/survey';

const surveyConfig = mainSurvey as SurveyConfig;

export default async function SurveyPage() {
    return redirect(`/survey/${surveyConfig.initialStep}`);
}

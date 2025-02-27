import { notFound, redirect } from 'next/navigation';
import { SurveyId, SURVEYS } from '@/config/surveys';

export default async function SurveyPage({
  params,
}: {
  params: Promise<{ surveyId: SurveyId }>;
}) {
  const { surveyId } = await params;

  const surveyConfig = SURVEYS[surveyId] || SURVEYS.main_survey;

  if (!surveyConfig) {
    notFound();
  }

  return redirect(`/${surveyId}/${surveyConfig.initialStep}`);
}

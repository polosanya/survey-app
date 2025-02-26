import { Metadata } from 'next';
import mainSurvey from '@/config/surveys/main-survey.json';
import { notFound, redirect } from 'next/navigation';
import { SurveyConfig, SurveyStep } from '@/types/survey';
import SingleChoiceStep from '@/steps/SingleChoiceStep';
import SummaryStep from '@/steps/SummaryStep';
import styles from './page.module.scss';
import Header from '@/components/Header';

const surveyConfig = mainSurvey as SurveyConfig;

export function generateStaticParams() {
  return [...Object.keys(surveyConfig.steps)].map((stepName) => ({
    stepName,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stepName: string }>;
}): Promise<Metadata> {
  const { stepName } = await params;
  const step = surveyConfig.steps[stepName];

  return {
    title: `Survey - ${step?.question}` || stepName,
  };
}

type Props = {
  params: Promise<{ stepName: string }>;
};

export default async function SurveyStepPage({ params }: Props) {
  const { stepName } = await params;

  const step = surveyConfig.steps[stepName];

  if (!step) {
    notFound();
  }

  const renderStep = (step: SurveyStep) => {
    if (step?.type === 'summary') {
      return <SummaryStep surveyConfig={surveyConfig} />;
    }

    if (step?.type === 'single-choice') {
      return <SingleChoiceStep step={step} />;
    }

    return redirect(`/survey/${surveyConfig.initialStep}`);
  };

  return (
    <div className={styles.wrapper}>
      <Header withBackIcon={stepName !== surveyConfig.initialStep} />

      {renderStep(step)}
    </div>
  );
}

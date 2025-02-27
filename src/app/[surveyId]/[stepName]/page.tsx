import { Metadata } from 'next';
import cx from 'classnames';
import { notFound, redirect } from 'next/navigation';
import { SurveyStep } from '@/types/survey';
import SingleChoiceStep from '@/steps/SingleChoiceStep';
import SummaryStep from '@/steps/SummaryStep';
import styles from './page.module.scss';
import Header from '@/components/Header';
import InfoStep from '@/steps/InfoStep';
import { SurveyId, SURVEYS } from '@/config/surveys';

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ surveyId: SurveyId }>;
}) {
  const { surveyId } = await params;
  const surveyConfig = SURVEYS[surveyId];

  return Object.keys(surveyConfig?.steps || {}).map((stepName) => ({
    surveyId,
    stepName,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ surveyId: SurveyId }>;
}): Promise<Metadata> {
  const { surveyId } = await params;
  const surveyConfig = SURVEYS[surveyId];

  return {
    title: surveyConfig.name,
  };
}

type Props = {
  params: Promise<{ stepName: string; surveyId: SurveyId }>;
};

export default async function SurveyStepPage({ params }: Props) {
  const { stepName, surveyId } = await params;

  const surveyConfig = SURVEYS[surveyId];

  const step =
    surveyConfig.steps[stepName] ||
    surveyConfig.steps[surveyConfig.initialStep];

  if (!step) {
    notFound();
  }

  const renderStep = (step: SurveyStep) => {
    if (step?.type === 'summary') {
      return <SummaryStep surveyConfig={surveyConfig} />;
    }

    if (step?.type === 'single-choice') {
      return <SingleChoiceStep step={step} surveyId={surveyId} />;
    }

    if (step?.type === 'info') {
      return <InfoStep step={step} surveyId={surveyId} />;
    }

    return redirect(`/${surveyId}/${surveyConfig.initialStep}`);
  };

  return (
    <div
      className={cx(styles.wrapper, {
        [styles.wrapperGradient]: step?.type === 'info',
      })}
    >
      <Header
        withBackIcon={stepName !== surveyConfig.initialStep}
        type={step?.type === 'info' ? 'white' : 'black'}
      />

      {renderStep(step)}
    </div>
  );
}

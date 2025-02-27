'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';
import { resetSurvey } from '@/store/surveySlice';
import styles from './SummaryStep.module.scss';
import { SurveyConfig, SurveyStep } from '@/types/survey';
import { useTextInterpolation } from '@/hooks/useTextInterpolation';

const SurveySummary = ({
  surveyConfig,
  step,
}: {
  surveyConfig: SurveyConfig;
  step: SurveyStep;
}) => {
  const { title = '', description = '' } = step;
  const { t } = useTextInterpolation();
  const dispatch = useDispatch();
  const router = useRouter();
  const answers = useSelector((state: RootState) => state.survey.answers);

  const getQuestionText = (stepId: string) => {
    const step = surveyConfig.steps[stepId];

    return t(step?.question || '');
  };

  const getAnswerLabel = (stepId: string, answerId: string) => {
    const step = surveyConfig.steps[stepId];

    const answerLabel =
      step?.options?.find((opt) => opt.id === answerId)?.text || '';

    return answerLabel;
  };

  const handleReset = () => {
    dispatch(resetSurvey());
    router.push(`/`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t(title)}</h1>

      {description && <p className={styles.description}>{t(description)}</p>}

      <ul className={styles.answerList}>
        {answers.map(({ stepId, answer }) => (
          <li key={stepId} className={styles.answerItem}>
            <h3>{getQuestionText(stepId)}</h3>

            <p>{getAnswerLabel(stepId, answer)}</p>
          </li>
        ))}
      </ul>
      <button className={styles.resetButton} onClick={handleReset}>
        Start New Survey
      </button>
    </div>
  );
};

export default SurveySummary;

'use client';

import { useTextInterpolation } from '@/hooks/useTextInterpolation';
import { SurveyStep } from '@/types/survey';
import styles from './InfoStep.module.scss';
import { useRouter } from 'next/navigation';
import { SurveyId } from '@/config/surveys';

const InfoStep = ({
  step,
  surveyId,
}: {
  step: SurveyStep;
  surveyId: SurveyId;
}) => {
  const { t } = useTextInterpolation();
  const router = useRouter();

  const { question = '', description = '', options = [], nextStep = '' } = step;

  const handleNextStep = (optionNextStep?: string) => {
    const resolvedNextStep = optionNextStep || (nextStep && t(nextStep));

    if (resolvedNextStep) {
      router.push(`/${surveyId}/${resolvedNextStep}`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t(question)}</h1>
      <p className={styles.description}>{t(description)}</p>

      {options?.map((option) => (
        <button
          key={option.id}
          className={styles.button}
          onClick={() => handleNextStep(option?.nextStep)}
        >
          {t(option.text)}
        </button>
      ))}
    </div>
  );
};

export default InfoStep;

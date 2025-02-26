'use client';

import { SurveyStep } from '@/types/survey';
import styles from './SingleChoiceStep.module.scss';
import Option from '@/components/Option';
import { useDispatch } from 'react-redux';
import { setAnswer, setCurrentStep } from '@/store/surveySlice';
import { useRouter } from 'next/navigation';
import { useTextInterpolation } from '@/hooks/useTextInterpolation';

const SingleChoiceStep = ({ step }: { step: SurveyStep }) => {
  const { question = '', options, description = '', nextStep } = step;
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTextInterpolation();

  const handleOptionSelect = (value: string, optionNextStep?: string) => {
    dispatch(setAnswer({ stepId: step.id, answer: value }));

    const resolvedNextStep = optionNextStep || (nextStep && t(nextStep));

    if (resolvedNextStep) {
      dispatch(setCurrentStep(resolvedNextStep));
      router.push(`/survey/${resolvedNextStep}`);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h1>{t(question)}</h1>

      {description && <h2>{t(description)}</h2>}

      <div className={styles.options}>
        {options?.map((option) => (
          <Option
            key={option.id}
            option={option}
            onClick={() => handleOptionSelect(option.id, option?.nextStep)}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleChoiceStep;

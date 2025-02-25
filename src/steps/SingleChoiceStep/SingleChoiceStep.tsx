'use client';

import { SurveyStep } from "@/types/survey";
import styles from './SingleChoiceStep.module.scss';
import Option from '@/components/Option';
import { useDispatch } from 'react-redux';
import { setAnswer, setCurrentStep } from '@/store/surveySlice';
import { useRouter } from 'next/navigation';

const SingleChoiceStep = ({ step }: { step: SurveyStep }) => {
    const { question, options } = step;
    const router = useRouter();
    const dispatch = useDispatch();

    const handleOptionSelect = (value: string, nextStep?: string) => {
        dispatch(setAnswer({ stepId: step.id, answer: value }));

        if (nextStep) {
            dispatch(setCurrentStep(nextStep));
            router.push(`/survey/${nextStep}`);
        }
    };
    return (
        <div className={styles.wrapper}>
            <h1>{question}</h1>

            <div className={styles.options}>
                {options?.map((option) => (
                    <Option key={option.id} option={option} onClick={() => handleOptionSelect(option.text, option.nextStep)} />
                ))}
            </div>
        </div>
    );
};

export default SingleChoiceStep;

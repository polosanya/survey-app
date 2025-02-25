import { Metadata } from 'next';
import mainSurvey from '@/config/surveys/main-survey.json';
import { notFound } from 'next/navigation';
import { SurveyConfig } from '@/types/survey';

type Props = {
    params: {
        stepName: string;
    };
};

const surveyConfig = mainSurvey as SurveyConfig;

export async function generateStaticParams() {
    return [
        ...Object.keys(surveyConfig.steps)
    ].map((stepName) => ({
        stepName,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { stepName } = params;
    const step = surveyConfig.steps[stepName];

    return {
        title: `Survey - ${step?.question}` || stepName,
    };
}

export default function SurveyStepPage({ params }: Props) {
    const { stepName } = params;

    if (stepName === 'summary') {
        // return <SurveyResults />;
        return (<>Summary</>)
    }

    const step = surveyConfig.steps[stepName];

    if (!step) {
        notFound();
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            {/* <SurveyQuestion step={step} /> */}
            QUESTION {stepName}
        </div>
    );
}

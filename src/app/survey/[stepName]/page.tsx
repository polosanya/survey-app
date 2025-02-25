import { Metadata } from 'next';
import mainSurvey from '@/config/surveys/main-survey.json';
import { notFound } from 'next/navigation';
import { SurveyConfig } from '@/types/survey';

const surveyConfig = mainSurvey as SurveyConfig;

export function generateStaticParams() {
    return [
        ...Object.keys(surveyConfig.steps)
    ].map((stepName) => ({
        stepName,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ stepName: string }> }): Promise<Metadata> {
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

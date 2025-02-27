import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { SurveyAnswer } from '@/types/survey';

export const useTextInterpolation = () => {
  const answers = useSelector((state: RootState) => state.survey.answers);

  const findAnswer = (stepId: string): string | undefined => {
    return answers.find((a: SurveyAnswer) => a.stepId === stepId)
      ?.answer as string;
  };

  const t = (text: string): string => {
    return text.replace(/\{([^}]+)\}/g, (match: string, expression: string) => {
      // Handle simple variable insert
      if (!expression.includes('?') && !expression.includes('&&')) {
        const answer = findAnswer(expression);
        return answer || match;
      }

      // Handle ternary operator
      if (expression.includes('?')) {
        const [condition, consequences] = expression
          .split('?')
          .map((s: string) => s.trim());
        const [truthy, falsy] = consequences
          .split(':')
          .map((s: string) => s.trim());

        // Parse condition
        const [variable, operator, value] = condition.split(/\s+/);
        const answer = findAnswer(variable);

        // Evaluate condition
        const isTrue =
          operator === '===' && answer === value.replace(/['"]/g, '');
        return isTrue
          ? truthy.replace(/['"]/g, '')
          : falsy.replace(/['"]/g, '');
      }

      // Handle && operator
      if (expression.includes('&&')) {
        const [condition, result] = expression
          .split('&&')
          .map((s: string) => s.trim());
        const [variable, operator, value] = condition.split(/\s+/);
        const answer = findAnswer(variable);

        return operator === '===' && answer === value.replace(/['"]/g, '')
          ? result.replace(/['"]/g, '')
          : '';
      }

      return match; // Return original if no operators found
    });
  };

  return { t };
};

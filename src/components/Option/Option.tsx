import { SurveyOption } from '@/types/survey';
import styles from './Option.module.scss';

const Option = ({
  option,
  onClick,
}: {
  option: SurveyOption;
  onClick: () => void;
}) => {
  return (
    <button className={styles.option} onClick={onClick}>
      {option.text}
    </button>
  );
};

export default Option;

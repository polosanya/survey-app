'use client';

import { useRouter } from 'next/navigation';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = ({
  withBackIcon = true,
  type = 'black',
}: {
  withBackIcon?: boolean;
  type?: 'black' | 'white';
}) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      {withBackIcon && (
        <button onClick={goBack} className={styles.backIcon}>
          <Image
            src={`/back_${type}.svg`}
            width={24}
            height={24}
            alt={'back'}
            // className={styles.backIcon}
          />
        </button>
      )}

      <Image src={`/logo_${type}.svg`} width={24} height={24} alt={'logo'} />
    </header>
  );
};

export default Header;

import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { ButtonSize } from 'antd/lib/button';
import { envConfig } from '@leaa/dashboard/src/configs';

import style from './style.module.less';

interface IProps {
  loading?: boolean;
  className?: string;
  size?: ButtonSize;
}

export const AuthGithubButton = (props: IProps) => {
  const { t } = useTranslation();

  return (
    <div className={cx(style['wrapper'], props.className)}>
      <Button size="small" href={`${envConfig.API_URL}/auth/github/login`}>
        Github
      </Button>
    </div>
  );
};

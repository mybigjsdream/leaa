import React, { useState, useEffect, forwardRef } from 'react';
import { Switch } from 'antd';

interface IProps {
  value?: number | undefined;
  onChange?: (checked: boolean | number) => void;
}

export const SwitchNumber = forwardRef((props: IProps, ref: React.Ref<any>) => {
  const [value, setValue] = useState<number | undefined>(props.value || 0);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (checked: boolean): void => {
    setValue(Number(checked));

    if (props.onChange) {
      props.onChange(Number(checked));
    }
  };

  return <Switch {...props} checked={Boolean(value)} onChange={onChange} ref={ref} />;
});

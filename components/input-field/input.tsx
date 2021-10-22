import React from 'react';
import { Input } from 'baseui/input';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../../styletron';

interface InputProps {
  name: string;
  label: string;
  type: string;
  onChange: () => void;
  onBlur: () => void;
  value: string;
}

const InputField: React.FC<InputProps> = ({
  name,
  label,
  onChange,
  onBlur,
  value,
  type,
}) => {
  return (
    <StyletronProvider value={styletron}>
      <div className='input-wrapper'>
        <label htmlFor={name}>{label}</label>
        <br />
        <Input
          id={name}
          placeholder={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
        />
        <br />
      </div>
    </StyletronProvider>
  );
};

export default InputField;

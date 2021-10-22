import * as React from 'react';
import { Button, KIND, SHAPE } from 'baseui/button';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../../styletron';

type ButtonProps = {
  text: string;
  isDisabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonInput: React.FC<ButtonProps> = ({ text, isDisabled, onClick }) => {
  return (
    <StyletronProvider value={styletron}>
      <Button
        onClick={onClick}
        kind={KIND.secondary}
        shape={SHAPE.pill}
        disabled={isDisabled}>
        {text}
      </Button>
    </StyletronProvider>
  );
};

export default ButtonInput;

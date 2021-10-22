import * as React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../../styletron';
import { Slider } from 'baseui/slider';

const SliderComponent: React.FC = () => {
  const [value, setValue] = React.useState([10]);
  return (
    <StyletronProvider value={styletron}>
      <div style={{ marginTop: '50px' }}>
        <Slider value={value} onChange={({ value }) => setValue(value)} />
      </div>
    </StyletronProvider>
  );
};

export default SliderComponent;

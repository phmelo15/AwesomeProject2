import React from 'react';
import {render} from '@testing-library/react-native';
import CoffeButton from '../CoffeButton';

describe('The component rendered', () => {
  it('The title button', () => {
    const {getByText} = render(<CoffeButton title="iniciar" />);
    expect(getByText('iniciar')).toBeTruthy();
  });

  it('The component child render', () => {
    const {getByTestId} = render(<CoffeButton title="iniciar" />);
    expect(getByTestId('15')).toBeTruthy();
  });
});

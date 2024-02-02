import React from 'react';
import CoffeCard from '../CoffeCard';
import {render} from '@testing-library/react-native';

describe('the component rendered', () => {
  it('the text rendered', () => {
    const {getByText} = render(
      <CoffeCard title="teste" description="descricao" price="30" />,
    );
    expect(getByText('teste')).toBeTruthy();
    expect(getByText('descricao')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
  });
  it('the subComponents rendered', () => {
    const {getByTestId} = render(
      <CoffeCard title="teste" description="descricao" price="30" />,
    );
    expect(getByTestId('Image')).toBeTruthy();
    expect(getByTestId('payment')).toBeTruthy();
    expect(getByTestId('icon')).toBeTruthy();
  });
});

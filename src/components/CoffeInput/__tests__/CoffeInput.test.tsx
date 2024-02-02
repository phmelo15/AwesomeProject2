import React from 'react';
import CoffeInput from '../CoffeInput';
import {render} from '@testing-library/react-native';
import ErrorBoundary from './ErrorBoundary';
import {useForm} from 'react-hook-form';

describe('The CoffeInput rendered', () => {
  it('the text rendered', () => {
    const {getByText} = render(
      <ErrorBoundary>
        <CoffeInput control={null} name="test" placeholderText="textPlaceholder" />,
      </ErrorBoundary>,
    );

    expect(getByText('textPlaceholder')).toBeTruthy();
  });
  it('the subcomponent rendered', () => {
    const {getByTestId} = render(
      <CoffeInput control={null} name="test" placeholderText="textPlaceholder" />,
    );

    expect(getByTestId('container')).toBeTruthy();
  });
});

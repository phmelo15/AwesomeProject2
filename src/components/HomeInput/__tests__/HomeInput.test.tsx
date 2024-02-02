import React from 'react';
import HomeInput from '../HomeInput';
import {render} from '@testing-library/react-native';

describe('The HomeInput rendered', () => {
  it('The subcomponent rendered', () => {
    const {getByTestId} = render(<HomeInput />);

    expect(getByTestId('lupaIcon')).toBeTruthy();
    expect(getByTestId('input')).toBeTruthy();
    expect(getByTestId('iconFilter')).toBeTruthy();
    expect(getByTestId('container')).toBeTruthy();
  });
});

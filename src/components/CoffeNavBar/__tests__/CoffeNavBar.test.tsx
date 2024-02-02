import React from 'react';
import CoffeNavBar from '../CoffeNavBar';
import {fireEvent, render} from '@testing-library/react-native';

describe('The CoffeNavBar rendered', () => {
  it('The container rendered', () => {
    const {getByTestId} = render(<CoffeNavBar returnCoffeType={val => null} />);
    expect(getByTestId('container')).toBeTruthy();
  });

  it('The Cappuccino flap its ok!', () => {
    const returnCoffeTypeMock = jest.fn();

    const {getByText} = render(<CoffeNavBar returnCoffeType={returnCoffeTypeMock} />);
    const cappuccino = getByText(/cappuccino/i);

    fireEvent.press(cappuccino);

    expect(returnCoffeTypeMock).toHaveBeenCalledWith('Cappuccino');
  });
  it('The Cold Brew flap its ok!', () => {
    const returnCoffeTypeMock = jest.fn();

    const {getByText} = render(<CoffeNavBar returnCoffeType={returnCoffeTypeMock} />);
    const cold = getByText(/cold brew/i);

    fireEvent.press(cold);

    expect(returnCoffeTypeMock).toHaveBeenCalledWith('Cold Brew');
  });
  it('The expresso flap its ok!', () => {
    const returnCoffeTypeMock = jest.fn();

    const {getByText} = render(<CoffeNavBar returnCoffeType={returnCoffeTypeMock} />);
    const expresso = getByText(/expresso/i);

    fireEvent.press(expresso);

    expect(returnCoffeTypeMock).toHaveBeenCalledWith('Expresso');
  });
});

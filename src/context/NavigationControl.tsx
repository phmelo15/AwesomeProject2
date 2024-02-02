import React, {createContext, useContext, useState} from 'react';

interface INavigationControl {
  navigationType: boolean;
  toggleNavType: (val: boolean) => void;
}

export const NavigationControl = createContext({} as INavigationControl);

export function NavigationControlProvider({children}: {children: React.ReactNode}) {
  const [navigationType, setNavigationType] = useState<boolean>(false);

  const toggleNavType = (value: boolean) => {
    setNavigationType(value);
  };

  return (
    <NavigationControl.Provider value={{navigationType, toggleNavType}}>
      {children}
    </NavigationControl.Provider>
  );
}

export function useNavControl() {
  return useContext(NavigationControl);
}

import React from 'react';
import {NavigationControlProvider, useNavControl} from './src/context/NavigationControl';
import {Routes} from './src/navigation/StackNavigation/routes';

const App = () => {
  // Mapbox.setAccessToken(
  //   'sk.eyJ1IjoicGVkcm9kZXYxNSIsImEiOiJjbHI2dDFycHUyOTd1MnFuODIxNWtyYjE5In0.bOQUCQeNiMaZyIzw8X0SGQ',
  // );
  // Mapbox.setConnected(true);
  // Mapbox.setTelemetryEnabled(false);
  // Mapbox.setWellKnownTileServer('Mapbox');

  const {navigationType} = useNavControl();
  // const [toggleState, setToggleState] = useState(navigationType);
  const toggle = navigationType;

  return (
    <NavigationControlProvider>
      <Routes />
    </NavigationControlProvider>
  );
};

export default App;

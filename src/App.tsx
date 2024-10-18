/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useRef, useState } from 'react';

import moment from 'moment';
import 'moment/locale/ru';
import { Edge, SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import { monthNamesShort } from '@constants';
// Ensure this path is correct
import { Screens, StackNavigator } from '@navigation';
// Ensure this path is correct
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { colors } from '@theme';
// Ensure this path is correct
import { Layout } from '@ui';

// Ensure this path is correct
import {
  notificationListener,
  requestUserPermission,
} from './push/notificationServices';

// Ensure this path is correct

moment.locale('ru');
moment.updateLocale('ru', {
  monthsShort: monthNamesShort,
});

const App = () => {
  enableScreens(true);
  const navigationRef = useNavigationContainerRef();
  const [currentScreen, setCurrentScreen] = useState<string>(
    Screens.WelcomeScreen,
  );
  const routeNameRef = useRef<string | undefined>(undefined);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.transparent,
    },
  };

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <SafeAreaProvider>
      <Layout {...ATTR(currentScreen)}>
        <NavigationContainer
          theme={MyTheme}
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.getCurrentRoute()?.name;
          }}
          onStateChange={() => {
            const currentRouteName = navigationRef.getCurrentRoute()?.name;
            if (currentRouteName) {
              setCurrentScreen(currentRouteName);
            }
          }}
        >
          <StackNavigator />
        </NavigationContainer>
      </Layout>
    </SafeAreaProvider>
  );
};

const ATTR = (screen: string) => {
  switch (screen) {
    case Screens.WelcomeScreen:
      return { edges: ['right', 'left', 'top', 'bottom'] as Edge[] };
    case Screens.ProfileEditScreen:
      return {
        backgroundBlurRadius: 10,
        backgroundOpacity: 0.3,
        edges: ['right', 'left'] as Edge[],
        style: { paddingHorizontal: 0 },
      };
    case Screens.LkScreen:
    case Screens.AddClientScreen:
    case Screens.PlanScreen:
    case Screens.DetailPlanScreen:
    case Screens.DetailClient:
      return {
        backgroundBlurRadius: 10,
        backgroundOpacity: 0.3,
        edges: ['right', 'left'] as Edge[],
        style: { paddingHorizontal: 0 },
      };
    default:
      return {
        backgroundBlurRadius: 10,
        backgroundOpacity: 0.3,
        edges: ['right', 'left', 'top', 'bottom'] as Edge[],
      };
  }
};

export default App;

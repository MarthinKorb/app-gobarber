import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AppointmentCreated from '../pages/AppointmentCreated';
import CreateAppointment from '../pages/CreateAppointment';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="AppoinmentCreated" component={AppointmentCreated} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />

    <App.Screen name="Profile" component={Profile} />

  </App.Navigator>
);

export default AppRoutes;

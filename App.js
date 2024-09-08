import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/admin_screens/LoginScreen';
import OtpScreen from './screens/admin_screens/OtpScreen';
import HomePage from './screens/admin_screens/HomePage';
import IssueResolved from './screens/admin_screens/IssueResolved';
import IssuePending from './screens/admin_screens/IssuePending';
import IssueForfeit from './screens/admin_screens/IssueForfeit';
import History from './screens/admin_screens/HistoryPage';
import IndexPage from './screens/IndexPage';
import SplashScreen from './screens/student_screens/SplashScreen';
import LoginScreenStudent from './screens/student_screens/LoginScreen';
import StudentOtpScreen from './screens/student_screens/OtpScreen';
import HomeScreen from './screens/student_screens/HomeScreen';
import RaiseIssueScreen from './screens/student_screens/RaiseIssueScreen';
import HistoryScreen from './screens/student_screens/HistoryScreen';
import WriteIssueScreen from './screens/student_screens/WriteIssueScreen';
import SubmissionScreen from './screens/student_screens/SubmissionScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexPage">

        <Stack.Screen
          name="SubmissionScreen"
          component={SubmissionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WriteIssueScreen"
          component={WriteIssueScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RaiseIssueScreen"
          component={RaiseIssueScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentOtpScreen"
          component={StudentOtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreenStudent"
          component={LoginScreenStudent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndexPage"
          component={IndexPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IssueResolved"
          component={IssueResolved}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IssuePending"
          component={IssuePending}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IssueForfeit"
          component={IssueForfeit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoryPage"
          component={History}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

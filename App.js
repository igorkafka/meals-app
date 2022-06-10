import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CatogoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'></StatusBar>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: {backgroundColor: '#351401'}}}>
      <Stack.Screen name="MealsCategories" component={CatogoriesScreen} options={{title: 'All Categories'}}
      />
      <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}/>
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

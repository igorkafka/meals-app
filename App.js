import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CatogoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
// import FavoriteContextProvider from './store/context/favorite-context';
import {Provider} from 'react-redux'
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={
    {headerStyle:{backgroundColor: '#351401'}, headerTintColor: 'white', 
    sceneContainerStyle: {backgroundColor: '#351401'}, 
    drawerContentStyle: {backgroundColor: '#351401'}, drawerInactiveTintColor: 'white', 
    drawerActiveTintColor: '#351401', drawerActiveBackgroundColor:'#3f3f25' }}>
    <Drawer.Screen name='Categories' component={CatogoriesScreen} options={
      {
        title: 'All Categories',
        drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
      }
    }/>
    <Drawer.Screen name='Favorites' component={FavoriteScreen} options={
      {
        drawerIcon: ({color, size}) => (<Ionicons name='star' color={color} size={size}/>)
      }
    }/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    {/* {<FavoriteContextProvider>} */}
    <Provider store={store}>
    <StatusBar style='dark'></StatusBar>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: {backgroundColor: '#351401'}}}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
        headerShown: false
        }}
      />
      <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}/>
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* {</FavoriteContextProvider>} */}
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

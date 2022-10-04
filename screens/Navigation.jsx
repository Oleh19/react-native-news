import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullNewsScreen } from './FullNews';
import { HomeScreen } from './Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Новости' }} />
        <Stack.Screen name="FullNews" component={FullNewsScreen} options={{ title: 'Статья' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
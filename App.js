import {StatusBar} from 'expo-status-bar';
import Container from "./src/Container";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sebas from './pages/Sebas'
import Emil from './pages/Emil'

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Emil">
                <Stack.Screen
                    name={'Emil'}
                    component={Emil}
                />
                <Stack.Screen
                    name={'Sebas'}
                    component={Sebas}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

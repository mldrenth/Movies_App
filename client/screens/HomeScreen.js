import {React} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenList from './HomeScreenList';
import MovieDetailScreen from './MovieDetailScreen';



const HomeScreen = () => {

const Stack = createNativeStackNavigator();
    
  
    return (
     <Stack.Navigator>
         <Stack.Screen name="HomeScreenList" component={HomeScreenList} options={{ headerShown: false }}/>
         <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} options={({ route }) => ({ title: route.params.title })}/>


     </Stack.Navigator>
    );
    
}


export default HomeScreen
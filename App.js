import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <View style={styles.container}>
        <Text style={styles.header}> Acropolis Robotics Center</Text>
        <StatusBar style="auto" />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    width: '100%',
    borderWidth: 5,
    borderColor: 'black',
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'black',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button: {
    margin: 10,
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


const ButtonHome = ({ name, ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.btnHome}
      activeOpacity={1}
      {...rest}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {

  const _gotoScreen = route => {
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./WelcomeScreen.jpg')}
        />
      <Text style={[styles.text, {marginBottom: 100, color: "white", fontSize: 30}]}>Welcome to i-Rate app!</Text>
      <ButtonHome
        name="Rating"
        onPress={() => _gotoScreen("Rating")}
      />
      <ButtonHome
        name="Restaurant"
        onPress={() => _gotoScreen("Restaurant")}
      />
      <ButtonHome
        name="Search"
        onPress={() => _gotoScreen("Search")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnHome: {
    borderColor: '#cacaca',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    width: 200,
    backgroundColor: '#aedced',
  },
  image: {
    position: 'absolute'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  }
});

export default Home;

import React from 'react';

import {Text, View, StyleSheet, Pressable} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#6c5ce7'}}>
      <View
        style={{
          marginVertical: '50%',
          marginHorizontal: '10%',
          padding: 10,
        }}>
        <Pressable
          style={styles.pressableButton}
          onPress={() => navigation.navigate('LaunchPad')}>
          {() => <Text style={styles.buttonText}>See Launchpads</Text>}
        </Pressable>
        <Pressable
          style={styles.pressableButton}
          onPress={() => navigation.navigate('AddInventory')}>
          {() => <Text style={styles.buttonText}>Add Inventory</Text>}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  pressableButton: {
    marginRight: 60,
    marginLeft: 60,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;

import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  Linking,
  StyleSheet,
  Pressable,
} from 'react-native';

const LaunchSection = ({route}) => {
  const [launchData, setlaunchData] = useState([]);
  const {launchId} = route.params;

  useEffect(() => {
    fetchlaunch(launchId);
  }, []);

  async function fetchlaunch(id) {
    // Fetching the data of particular launch using its id
    await axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then(res => {
        return res;
      })
      .then(data => {
        setlaunchData(data.data);
      })
      .catch(error => {
        console.warn(error);
      });
  }
  const webCast = launchData.links?.webcast;

  return (
      <View style={{flex: 1,
        backgroundColor: '#6c5ce7',}}> 
    <View
      style={{
        borderWidth: 1,
        borderColor: 'whitesmoke',
        marginVertical: 100,
        marginHorizontal: 5,
        padding: 10,
       
      
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          textAlign: 'center',
          borderBottomColor: '#b4c1c1',
          borderBottomWidth: 1,
          padding: 4,
          color:'white'
        }}>
        {' '}
        ABOUT LAUNCH{' '}
      </Text>
      <Text style={styles.launchname}> {launchData && launchData.name}</Text>
      <Text style={styles.textStyle}>
        {' '}
        {launchData.details === null ? 'No details' : launchData.details}
      </Text>
      <Text style={styles.textStyle}>
        Reused : {launchData.reused === true ? ' True' : ' False'}
      </Text>

      <Pressable style={styles.PressableButton} onPress={() => Linking.openURL(webCast)}>
        {() => <Text style={styles.PressableButtonText}>See Webcast</Text>}
      </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  launchname: {
    textAlign: 'center',
    color: 'white',
    margin: 5,
    fontWeight: '800',
    fontSize:20
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  PressableButton: {
    marginRight: 60,
    marginLeft: 60,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  PressableButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default LaunchSection;

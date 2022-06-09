import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import Card from './Card';

const LaunchPadTable = ({navigation}) => {
  const [launchpadData, setlaunchpadData] = useState([]);
  const [launchData, setlaunchData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    //  Requesting data for launchpads

  console.log('before axios')
    await axios.get('https://api.spacexdata.com/v4/launchpads')
      .then(res => {
       
        return res;
      })
      .then(data => {

        if (data.status === 200) {
          setlaunchpadData(data.data);
        }
      })
      .catch(error => {
       
        console.warn(error);
      });

    await axios
      .get('https://api.spacexdata.com/v4/launches')
      .then(res => {
        return res;
      })
      .then(data => {
        if (data.status === 200) {
          setlaunchData(data.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={launchpadData}
        renderItem={({item}) => {
          return (
            <Card info={item} launchData={launchData} navigation={navigation} />
          );
        }}
        showsVerticalScrollIndicator={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
  },
});
export default LaunchPadTable;

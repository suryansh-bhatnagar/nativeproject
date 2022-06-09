import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LaunchIdSec from './LaunchIdSec';
import {NoLaunch} from './LaunchIdSec';

const Card = ({info, launchData, navigation}) => {
  const {name, details, status, launches} = info;
  // Filtering out 3 launches
  const generateArray = () => {
    let array = launches.filter((item, index) => {
      return index >= 0 && index < 3;
    });
    return array;
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.statusStyle}>
            Status {': '}
            {status.toUpperCase()}
          </Text>
          <Text style={styles.detailStyle}>{details}</Text>

          <View style={styles.launchBoxStyle}>
            {launches.length === 0 ? (
              <NoLaunch />
            ) : (
              generateArray().map((elem, index) => {
                return (
                  <View key={elem}>
                    <LaunchIdSec
                      launchData={launchData}
                      elem={elem}
                      navigation={navigation}
                    />
                  </View>
                );
              })
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#f7f8fa',

    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  titleStyle: {
    marginTop: 14,
    color: '#6c5ce7',
    fontSize: 20,
    fontWeight: '700',
  },
  statusStyle: {
    marginTop: 4,
    fontWeight: '500',
    fontSize: 16,
    color: '#212224',
  },
  detailStyle: {
    marginTop: 10,
    color: '#212224',
    fontWeight: '500',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  launchBoxStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default Card;

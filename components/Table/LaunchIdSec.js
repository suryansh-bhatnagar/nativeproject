import React from 'react';
import {Text, View, Pressable} from 'react-native';


const LaunchIdSec = props => {
  // Generating names for launches with the help of their id
  const generateName = element => {
    let launchElement = props.launchData.filter(x => x.id === element);
    if (launchElement[0]) {
      return launchElement[0].name;
    }
  };
  return (
    <View style={{width: 100} }>

      <Pressable
        onPress={() =>
          props.navigation.navigate('LaunchSection', {
            launchId: `${props.elem}`,
          })
        }>
        {({pressed}) => (
          <Text
            style={{
              color: pressed ? 'red' : '#6c5ce7',
              textAlign: 'center',
              marginVertical: 10,
              fontWeight:'800'
            }}>
            {generateName(props.elem)}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export const NoLaunch = () => {
  return <Text style={{textAlign: 'center',fontWeight:'700',color:'#212224' ,fontSize:16 , marginBottom:5}}> No launch Available</Text>;
};


export default LaunchIdSec;

import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AuthContext} from '../../context/context';

const Login = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(false);
  const productInfo = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object({
    username: Yup.string().required('Enter username to continue'),
    password: Yup.string().required('Enter password to continue'),
  });

  return (
    <Formik
      initialValues={productInfo}
      validationSchema={validationSchema}
      onSubmit={values => {
        if (
          values.username === 'suryansh' &&
          values.password === 'suryansh@1234'
        ) {
          signIn();
          // navigation.navigate('Home', {});
        } else {
          setErrorMessage(!errorMessage);
          // Alert.alert("Wrong Credentials")
        }
      }}>
      {({values, handleChange, handleSubmit, errors, touched}) => {
        const {username, password} = values;

        return (
          <View style={{height: '100%', backgroundColor: '#6c5ce7'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 30,
              }}>
              <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                Welcome !
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                paddingVertical: 50,
                paddingHorizontal: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 22,
                  marginBottom: 18,
                  fontWeight: '600',
                }}>
                Login to my app{' '}
              </Text>
              <View style={{flexDirection: 'column', marginBottom: 15}}>
                <TextInput
                  mode="outlined"
                  label="Username"
                  value={username}
                  onChangeText={handleChange('username')}
                />
                {errors.username && touched.username && (
                  <HelperText style={{color: 'red'}}>
                    {errors.username}
                  </HelperText>
                )}
              </View>
              <View style={{flexDirection: 'column'}}>
                <TextInput
                  mode="outlined"
                  label="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={handleChange('password')}
                />
                {errors.password && touched.password && (
                  <HelperText style={{color: 'red'}}>
                    {errors.password}
                  </HelperText>
                )}
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Pressable
                  style={styles.PressableButton}
                  onPress={handleSubmit}>
                  {() => <Text style={styles.PressableButtonText}>Login </Text>}
                </Pressable>
                {errorMessage && (
                  <HelperText style={{color: 'red', fontSize: 16}}>
                    Invalid credentials
                  </HelperText>
                )}
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  PressableButton: {
    width: '90%',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#6c5ce7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  PressableButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

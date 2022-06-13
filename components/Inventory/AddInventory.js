import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import DatePicker from 'react-native-date-picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
function AddInventory({navigation}) {
  const [showPackagingDropDown, setShowPackagingDropDown] = useState(false);
  const [showGstDropDown, setShowGstDropDown] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // const requiredErrMessage = 'This field is required';
  const productInfo = {
    ProductName: '',
    TotalQuantity: '',
    PackagingTypeValue: 'other',
    PackagingDesc: '',
    NoOfStrips: '',
    MRP: '',
    AmountPaid: '',
    BatchCode: '',
    GST: '12',
  };

  const validationSchema = Yup.object({
    ProductName: Yup.string().required('This field is required'),
    TotalQuantity: Yup.number().min(1, 'It can not be less than 1').required('This field is required'),
    PackagingTypeValue: Yup.string().required('This field is required'),
    PackagingDesc: Yup.string(),

    NoOfStrips: Yup.number().min(1, 'It can not be less than 1'),

    MRP: Yup.number()
      .min(1, 'It can not be less than 1')
      .required('This field is required'),
    AmountPaid: Yup.number()
      .min(1, 'It can not be less than 1')
      .required('This field is required'),
    BatchCode: Yup.string(),
    GST: Yup.number(),
  });

  const PackagingType = [
    {
      label: 'Strip',
      value: 'strip',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];
  const GstOptions = [
    {label: 'GST 0%', value: '0'},
    {label: 'GST 5%', value: '5'},
    {label: 'GST 12%', value: '12'},
    {label: 'GST 18%', value: '18'},
    {label: 'GST 24%', value: '24'},
  ];

  return (
    <Formik
      initialValues={productInfo}
      validationSchema={validationSchema}
      onSubmit={values => {
        var newDate = date.getMonth() + 1 + '-' + date.getFullYear();

        navigation.navigate('InventoryDetails', {
          ProductName: `${values.ProductName}`,
          TotalQuantity: `${values.TotalQuantity}`,
          AmountPaid: `${values.AmountPaid}`,
          BatchCode: `${values.BatchCode}`,
          GST: `${values.GST}`,
          MRP: `${values.MRP}`,
          NoOfStrips: `${values.NoOfStrips}`,
          PackagingDesc: `${values.PackagingDesc}`,
          PackagingTypeValue: `${values.PackagingTypeValue}`,
          TotalQuantity: `${values.TotalQuantity}`,
          ExpDate: `${newDate}`,
        });
      }}>
      {({values, handleChange, handleSubmit, errors, touched}) => {
        const {
          ProductName,
          TotalQuantity,
          PackagingTypeValue,
          PackagingDesc,
          NoOfStrips,
          MRP,
          AmountPaid,
          GST,
          BatchCode,
        } = values;
        {
        }

        {
          /* Returning the input field based on PackagingTypeValue */
        }
        const packagingField = () => {
          if (PackagingTypeValue === 'strip') {
            return (
              <TextInput
                disabled={PackagingTypeValue == '' ? true : false}
                style={{margin: 10}}
                mode="outlined"
                label="Enter number of  Strips "
                value={NoOfStrips}
                onChangeText={handleChange('NoOfStrips')}
                keyboardType="phone-pad"
              />
            );
          } else {
            return (
              <TextInput
                disabled={PackagingTypeValue == '' ? true : false}
                style={{margin: 10}}
                mode="outlined"
                label="Packaging Description"
                value={PackagingDesc}
                onChangeText={handleChange('PackagingDesc')}
              />
            );
          }
        };

        return (
          <View style={{height: '100%', backgroundColor: '#6c5ce7'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                Add items to the inventory
              </Text>
            </View>
            <View
              style={{
                flex: 4,
                backgroundColor: '#fff',
                paddingVertical: 50,
                paddingHorizontal: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: '#fff',
              }}>
              <View style={{flexDirection: 'column'}}>
                <TextInput
                  style={{margin: 10}}
                  mode="outlined"
                  label="Product Name *"
                  value={ProductName}
                  onChangeText={handleChange('ProductName')}
                />
                {errors.ProductName && touched.ProductName && (
                  <HelperText style={{color: 'red'}}>
                    {errors.ProductName}
                  </HelperText>
                )}
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', padding: 10}}>
                  <TextInput
                    style={{}}
                    mode="outlined"
                    label="Total quantity *"
                    value={TotalQuantity}
                    onChangeText={handleChange('TotalQuantity')}
                    keyboardType="phone-pad"
                  />
                  {errors.TotalQuantity && touched.TotalQuantity && (
                    <HelperText style={{color: 'red'}}>
                      {errors.TotalQuantity}
                    </HelperText>
                  )}
                </View>

                <View style={{padding: 10, width: '50%'}}>
                  <DropDown
                    label={'Packaging *'}
                    mode={'outlined'}
                    visible={showPackagingDropDown}
                    showDropDown={() => setShowPackagingDropDown(true)}
                    onDismiss={() => setShowPackagingDropDown(false)}
                    value={PackagingTypeValue}
                    setValue={handleChange('PackagingTypeValue')}
                    list={PackagingType}
                  />
                  {errors.PackagingTypeValue && touched.PackagingTypeValue && (
                    <HelperText style={{color: 'red'}}>
                      {errors.PackagingTypeValue}
                    </HelperText>
                  )}
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
                {packagingField()}
                {/* {errors.NoOfStrips && touched.NoOfStrips && (
                  <HelperText style={{color: 'red'}}>
                    {errors.TotalQuantity}
                  </HelperText>
                )} */}
                {PackagingTypeValue == 'other'
                  ? errors.PackagingDesc &&
                    touched.PackagingDesc && (
                      <HelperText style={{color: 'red'}}>
                        {errors.PackagingDesc}
                      </HelperText>
                    )
                  : errors.NoOfStrips &&
                    touched.NoOfStrips && (
                      <HelperText style={{color: 'red'}}>
                        {errors.NoOfStrips}
                      </HelperText>
                    )}
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%'}}>
                  <TextInput
                    style={{margin: 10}}
                    mode="outlined"
                    label="MRP *"
                    value={MRP}
                    onChangeText={handleChange('MRP')}
                    keyboardType="phone-pad"
                  />
                  {errors.MRP && touched.MRP && (
                    <HelperText style={{color: 'red'}}>{errors.MRP}</HelperText>
                  )}
                </View>
                <View style={{width: '50%'}}>
                  <TextInput
                    style={{margin: 10}}
                    mode="outlined"
                    label="Paid Amount *"
                    value={AmountPaid}
                    onChangeText={handleChange('AmountPaid')}
                    keyboardType="phone-pad"
                  />
                  {errors.AmountPaid && touched.AmountPaid && (
                    <HelperText style={{color: 'red'}}>
                      {errors.AmountPaid}
                    </HelperText>
                  )}
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{flex: 1, margin: 10}}
                  mode="outlined"
                  label="Batch Code"
                  value={BatchCode}
                  onChangeText={handleChange('BatchCode')}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', padding: 10}}>
                  <Pressable
                    style={styles.expiryButtonStyle}
                    onPress={() => setOpen(true)}>
                    {() => (
                      <Text style={{color: 'black', textAlign: 'center'}}>
                        Expiry Date{' '}
                      </Text>
                    )}
                  </Pressable>
                  {/* <Button style={{marginVertical:'10'}} title="Expiry Date"  onPress={() => setOpen(true)} /> */}
                  {/* <TextInput
                style={{flex: 0.5, margin: 10}}
                mode="outlined"
                value={ExpDate}
                label="Expiry Date"
                onPressIn={() => setOpen(true)}
              /> */}
                </View>

                <View style={{padding: 10, width: '50%'}}>
                  <DropDown
                    label={'GST'}
                    mode={'outlined'}
                    visible={showGstDropDown}
                    showDropDown={() => setShowGstDropDown(true)}
                    onDismiss={() => setShowGstDropDown(false)}
                    value={GST}
                    setValue={handleChange('GST')}
                    list={GstOptions}
                  />
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable
                  style={styles.PressableButton}
                  onPress={handleSubmit}>
                  {() => <Text style={styles.PressableButtonText}>Add </Text>}
                </Pressable>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <DatePicker
                  modal
                  minimumDate={date}
                  open={open}
                  date={date}
                  mode="date"
                  textColor="#ffffff"
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

export default AddInventory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  PressableButton: {
    width: '80%',
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
  expiryButtonStyle: {
    width: '80%',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function InventoryDetails({route}) {
  const {
    ProductName,
    TotalQuantity,
    PackagingTypeValue,
    PackagingDesc,
    NoOfStrips,
    MRP,
    AmountPaid,
    BatchCode,
    GST,
    ExpDate,
  } = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#6c5ce7'}}>
      <View style={styles.cardContainer}>
        <Text style={styles.titleStyle}>Product Name : {ProductName}</Text>
        <View>
          <Text style={styles.rowItem}>Quantity : {TotalQuantity}</Text>
          <Text style={styles.rowItem}>Batch Code: {BatchCode}</Text>
          <Text style={styles.rowItem}>MRP: {MRP}</Text>
          <Text style={styles.rowItem}>Amount Paid : {AmountPaid}</Text>
          <Text style={styles.rowItem}>GST : {GST}</Text>
          {PackagingTypeValue == 'strip' ? (
            <Text style={styles.rowItem}>No. of Strips : {NoOfStrips}</Text>
          ) : (
            <Text style={styles.rowItem}>
              Packaging Description : {PackagingDesc}
            </Text>
          )}
          <Text style={styles.rowItem}>ExpDate : {ExpDate}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}></View>
      </View>
    </View>
  );
}

export default InventoryDetails;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: '10%',
    marginVertical: '40%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f7f8fa',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  titleStyle: {
    color: '#6c5ce7',
    fontSize: 20,
    fontWeight: '700',
  },
  rowItem: {
    color: 'grey',
    fontSize: 14,
  },
});

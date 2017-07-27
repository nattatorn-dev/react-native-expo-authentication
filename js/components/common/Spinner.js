import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {  // eslint-disable-line
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    alignSelf: 'center',
  }
};

export { Spinner };

import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function Detail({navigation}) {
const data = navigation.state.params.item;
    return (
          <View style={styles.container}>
            <Text style={styles.resname}>{data.Name}</Text>
            <Text style={styles.restype}> Type: {data.Type}</Text>
            <Text style={styles.rescost}>Average Cost ($): {data.Avgcost}</Text>
          </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100
    },
    resname: {
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 40
    },
    restype: {
        fontSize: 30,
        marginBottom: 40
    },
    rescost: {
        fontSize: 30
    }
});
export default Detail;
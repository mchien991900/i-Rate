// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
// } from 'react-native';

// const Search = () => {

//   const _onChangeText = text => {
//     console.log(text);
//   }

//   const _handleSeach = () => {

//   }

//   const _keyExtractor = item => item.toString();

//   const _renderItem = ({ item }) => {
//     return (
//       <View>
//         <Text>Danh hàng {item}</Text>
//         <View style={styles.btn}>
//           <TouchableOpacity>
//             <Text>Edit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Search</Text>
//       <View>
//         <TextInput
//           placeholder="Seach"
//           onChangeText={_onChangeText}
//         />

//         <FlatList
//           data={[1, 2, 3]}
//           keyExtractor={_keyExtractor}
//           renderItem={_renderItem}
//         />
//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={_handleSeach}
//         >
//           <Text>Search</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default Search;

// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, StyleSheet, View, FlatList, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Data} from '../RestaurantData';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

const App = ({navigation}) => {
  const [namesearch, setNameSearch] = useState('');
  const [typesearch, setTypeSearch] = useState('');
  const [pricesearch, setPriceSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(Data);
    setMasterDataSource(Data)
  }, [])

  const searchNameFilterFunction = (name) => {
    if (name) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Name
        return itemData.indexOf(name) > -1;
      });
      setFilteredDataSource(newData);
      setNameSearch(name);
    } else {
       setFilteredDataSource(masterDataSource);
      setNameSearch(name);
    }
  };

  const searchTypeFilterFunction = (type) => {
    if (type) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Type
        return itemData.indexOf(type) > -1;
      });
      setFilteredDataSource(newData);
      setTypeSearch(type);
    } else {
      setFilteredDataSource(masterDataSource);
      setTypeSearch(type);
    }
  };

  const searchPriceFilterFunction = (price) => {
    if (price) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Avgcost
        return itemData.indexOf(price) > -1;
      });
      setFilteredDataSource(newData);
      setPriceSearch(price);
    } else {
      setFilteredDataSource(masterDataSource);
      setPriceSearch(price);
    }
  };
  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => navigation.navigate("Detail", {item})}>
        {item.Name}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    alert('Id : ' + item.id + ' Title : ' + item.Name + 'boye :' + item.body);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Restaurant Name</Text>
        <SearchBar
          round
          onChangeText={(name) => searchNameFilterFunction(name)}
          onClear={(name) => searchNameFilterFunction('')}
          placeholder="Type Here..."
          value={namesearch}
        />
        <Text style={{fontWeight: 'bold', marginTop: 20}}>Restaurant Type</Text>
        <Picker
                style={{ height: 50, width: 250, marginBottom: 150, marginTop: -30 }}
                onValueChange={(type) => searchTypeFilterFunction(type)}
                selectedValue={typesearch}
                >
                <Picker.Item label="Grill" value="Grill" />
                <Picker.Item label="Sea Food" value="Fast Food" />
                <Picker.Item label="Fast Food" value="Sea Food" />
              </Picker>
        <Text style={{fontWeight: 'bold'}}>Restaurant Cost</Text>
        <SearchBar
          round
          onChangeText={(price) => searchPriceFilterFunction(price)}
          onClear={(price) => searchPriceFilterFunction('')}
          placeholder="Type Here..."
          value={pricesearch}
        />
        <Text style={{fontWeight: 'bold', marginTop: 20}}>Restaurant List</Text>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
        {/* <Modal isVisible={isModalVisible} >
          <View style={{flex: 1}}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30
  },
  itemStyle: {
    padding: 10,
  },
});

export default App;

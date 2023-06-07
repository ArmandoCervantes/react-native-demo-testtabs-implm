import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

function ItmLst(){
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (<FlatList
    data={[
      {name: 'Devin',id:1},
      {name: 'Dan',id:2},
      {name: 'Dominic',id:3},
      {name: 'Jackson',id:4},
      {name: 'James',id:5},
      {name: 'Joel',id:6},
      {name: 'John',id:7},
      {name: 'Jillian',id:8},
      {name: 'Jimmy',id:9},
      {name: 'Julie',id:10},
      {name: 'Devin',id:11},
      {name: 'Dan',id:12},
      {name: 'Dominic',id:13},
      {name: 'Jackson',id:14},
      {name: 'James',id:15},
      {name: 'Joel',id:16},
      {name: 'John',id:17},
      {name: 'Jillian',id:18},
      {name: 'Jimmy',id:19},
      {name: 'Julie',id:20},
    ]}
    renderItem={({item}) => <Text style={stylesItm.item}>{item.name}</Text>}
  />);
}

const stylesItm = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,

  },
  item: {
    padding: 12,
    fontSize: 18,
    height: 46,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: '#900',
    textAlign: 'center',
    fontWeight:'normal',
  },
});
export default ItmLst;

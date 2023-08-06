import React,{useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Home = () => {
  const [list,setList] = useState([])  
  
  useEffect(()=>{
    async function fetchData() {
        const token = await AsyncStorage.getItem('token', token);
        if (!token) {
            return;
        }
        const config = {
            headers:{
              'Authorization': token
            }
          };
        const response = await axios.post('https://powerfab.qcon.com.qa:9300/api/MApp_Users/deptsLvl1',config)
        const data = response?.data;
        setList((prev)=>{
            setList(data)
        })
      }
    fetchData()
  },[])
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default Home;
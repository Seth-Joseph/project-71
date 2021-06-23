import React from 'react';  
import {StyleSheet, Text, View,Button,TextInput,TouchableOpacity,Image} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import Loginscreen from '../screens/Loginscreen'
import Signup from '../screens/Signup'
import { block } from 'react-native-reanimated';
import db from '../config';
import firebase from 'firebase';

class HomeScreen extends React.Component {
  constructor() {
    super();
    
  }
  submitStory=(itemName, description)=>{
    console.log('ok')
    db.collection("exchange_requests").add({
      "item_name"  : itemName,
      "description": description,
    })
    this.setState({
      itemName   :'',
      description:''
    })
    return Alert.alert(
      'Item ready to exchange',
      '',
      [
        {text: 'OK',onPress:()=>{
          this.props.navigation.navigate('HomeScreen')
        }}
      ]
    )
  }
  render() {
    return (
      <View style={styles.container}> 
          <Text style={styles.title}>Welcome,</Text>
          <Text style={styles.underline}>__________________________________________</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image source={require('../assets/ed.jpg')} style={styles.storyimg} />      
          </View>
          <View style={styles.column}>
              <TouchableOpacity>
                <Text style={styles.storytitle}>The Elephant And The Dog</Text> 
                <Text style={styles.storydesc}>☆ Panchatantra</Text> 
              </TouchableOpacity>
          </View>
          <Text style={styles.underline}>__________________________________________</Text>
          <View style={styles.column}>
            <Image source={require('../assets/k.jpg')} style={styles.storyimg} />  
          </View>
          <View style={styles.column}>
              <TouchableOpacity>
                <Text style={styles.storytitle}>The Kettle Who Gave Birth</Text> 
                <Text style={styles.storydesc}>☆ Turkish Folktale</Text> 
              </TouchableOpacity>
          </View>
         </View>
      </View>        
    );
  }
}
class Exchangescreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Image source={require('../assets/p.png')} style={styles.b} />
        <Text style={styles.paragraph}>Write your own Story</Text>
        <TextInput
          style={styles.text}
          placeholder="Story Title"
          keyboardType="default"
        />

        <TextInput
          style={styles.text2}
          placeholder="Your Story here"
          keyboardType="default"
          multiline={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submitStory} 
          >
          Submit
        </TouchableOpacity>
        </View>  
    );  
  }  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#FFE2DE',
  },
  paragraph: {
    paddingTop: 0,
    paddingLeft:25,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'black',
  },
  button: {
    padding: 10,
    borderColor: '#2c9fa6',
    borderWidth: 1,
    color: '#FEFEF1',
    borderRadius: 20,
    width: 250,
    textAlign: 'center',
    marginLeft: 40,
    marginTop: 20,
    backgroundColor: '#2c9fa6',
    fontFamily: 'sans-serif',
  },
  text: {
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#2c9fa6',
    borderTopColor: '#2c9fa6',
    borderLeftColor: '#2c9fa6',
    borderRightColor: '#2c9fa6',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 40,
    fontWeight:"bold",
    borderRadius:5
  },
  text2: {
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#2c9fa6',
    borderTopColor: '#2c9fa6',
    borderLeftColor: '#2c9fa6',
    borderRightColor: '#2c9fa6',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 40,
    fontWeight:"bold",
    borderRadius:5,
    height:150
  
  },
  b: {
    width: 150,
    height: 150,
    marginLeft: 90,
  }, 
  title:{
    paddingLeft:20,
    paddingTop:50,
    fontSize:28,
    fontWeight:'bold',
    color:'black',
  },
  underline:{
    color:'grey',
    paddingLeft:50,
    
  },
  storyimg: {
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor:'#FFE2DE',
    marginTop:20,
    marginLeft:10
  }, 
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight:70


  },
  column: {
    flexDirection: 'column',
    width: '50%',
  },
  storytitle: {
    fontSize:15,
    fontFamily:'monospace',
    fontWeight:'bold',
    marginTop:50,
   
  },
  storydesc:{
    color:'grey',
  },
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Exchange: { screen: Exchangescreen,  
            navigationOptions:{  
                tabBarLabel:'Create',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-add'}/>  
                    </View>),  
                activeColor: '#2c9fa6',  
                inactiveColor: 'gray',  
                barStyle: { backgroundColor: '#FFE2DE' },  
            }  
        },  
      
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#2c9fa6',  
      inactiveColor: 'gray',  
      barStyle: { backgroundColor: '#FFE2DE' }, 
      
    },  
);  
export default createAppContainer(TabNavigator);  

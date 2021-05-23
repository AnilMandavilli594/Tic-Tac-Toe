import React, { Component } from 'react';
import { StyleSheet, Text, View,Modal} from 'react-native';
import {Button} from 'react-native-elements';
import {Col,Row,Grid} from 'react-native-easy-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';

class App extends Component {


  state={
    count00:null,
    count10:null,
    count20:null,
    count01:null,
    count11:null,
    count21:null,
    count02:null,
    count12:null,
    count22:null,
    presentuser:'a',
    show:false,
    count:0
  }

  addCount00=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count00 = this.state.count00;
    if(x==='a' && count00===null){
      count = count+1;
      this.setState({
        count00:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count00===null){
      count = count+1;
      this.setState({
        count00:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount10=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count10 = this.state.count10;
    if(x==='a' && count10===null){
      count = count+1;
      this.setState({
        count10:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count10===null){
      count = count+1;
      this.setState({
        count10:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount20=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count20 = this.state.count20;
    if(x==='a' && count20===null){
      count = count+1;
      this.setState({
        count20:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count20===null){
      count = count+1;
      this.setState({
        count20:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount01=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count01 = this.state.count01;
    if(x==='a' && count01===null){
      count = count+1;
      this.setState({
        count01:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count01===null){
      count = count+1;
      this.setState({
        count01:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount11=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count11 = this.state.count11;
    if(x==='a' && count11===null){
      count = count+1;
      this.setState({
        count11:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count11===null){
      count = count+1;
      this.setState({
        count11:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount21=()=>{
    const x = this.state.presentuser;
    let count = this.state.count;
    const count21 = this.state.count21;
    if(x==='a' && count21===null){
      count = count+1;
      this.setState({
        count21:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count21===null){
      count = count+1;
      this.setState({
        count21:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount02=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count02 = this.state.count02;
    if(x==='a' && count02===null){
      count = count+1;
      this.setState({
        count02:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count02===null){
      count = count+1;
      this.setState({
        count02:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount12=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count12 = this.state.count12;
    if(x==='a' && count12===null){
      count = count+1;
      this.setState({
        count12:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count12===null){
      count = count+1;
      this.setState({
        count12:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }
  addCount22=()=>{
    let count = this.state.count;
    const x = this.state.presentuser;
    const count22 = this.state.count22;
    if(x==='a' && count22===null){
      count = count+1;
      this.setState({
        count22:'X',
        count
      });
      this.setState({presentuser:'b'})
    }
    if(x==='b' && count22===null){
      count = count+1;
      this.setState({
        count22:'O',
        count
      });
      this.setState({presentuser:'a'})
    }
  }

  resetGame=()=>{
    this.setState({
      count00:null,
      count10:null,
      count20:null,
      count01:null,
      count11:null,
      count21:null,
      count02:null,
      count12:null,
      count22:null,
      presentuser:'a',
      count:0
    })
  }

  render(){
    const {count00,count10,count20,count01,count11,count21,count02,count12,count22,count} = this.state;
    let winner = null;
    if(count00==='X' && count10==='X' && count20==='X' || 
        count00==='X' && count01==='X' && count02==='X' || 
        count00==='X' && count11=== 'X' && count22==='X' ||
        count10==='X' && count11==='X' && count12==='X' ||
        count20==='X' && count21==='X' && count22==='X' ||
        count01==='X' && count11==='X' && count21==='X' ||
        count02==='X' && count12==='X' && count22==='X' ||
        count02==='X' && count11==='X' && count20==='X'
        ){
      winner =( <Modal
        transparent={true}
        visible={true}
      >
        <View style={{backgroundColor:"#000000aa",flex:1}}>
          <View style={{backgroundColor:"#ffffff",margin:50,padding:40,borderRadius:10}}>
            <Text style={{margin:200}}>Player 1 is winner</Text>
            <Button title="Play Again" onPress={this.resetGame}/>
          </View>
        </View>
      </Modal> );
    }else if(count00==='O' && count10==='O' && count20==='O' || 
    count00==='O' && count01==='O' && count02==='O' || 
    count00==='O' && count11=== 'O' && count22==='O' ||
    count10==='O' && count11==='O' && count12==='O' ||
    count20==='O' && count21==='O' && count22==='O' ||
    count01==='O' && count11==='O' && count21==='O' ||
    count02==='O' && count12==='O' && count22==='O' ||
    count02==='O' && count11==='O' && count20==='O'){
      winner=(
        <Modal
          transparent={true}
          visible={true}
        >
          <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={{backgroundColor:"#ffffff",margin:50,padding:40,borderRadius:10}}>
              <Text style={{margin:200}}>Player 2 is winner</Text>
              <Button title="Play Again" onPress={this.resetGame}/>
            </View>
          </View>
        </Modal>);
    }else if(count===9){
      winner=(
        <Modal
          transparent={true}
          visible={true}
        >
          <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={{backgroundColor:"#ffffff",margin:50,padding:40,borderRadius:10}}>
              <Text style={{margin:200}}>Sorry!!!!No Moves Left</Text>
              <Button title="Play Again" onPress={this.resetGame}/>
            </View>
          </View>
        </Modal>);
    }else{
      winner=null;
    }

    return (
      <View style={styles.container}>
        <Text style={{marginTop:100,fontSize:30,marginBottom:50}}>Tic-Tac-Toe</Text>
        <View style={{alignSelf:'flex-end',marginRight:10,marginBottom:20}}>
          <Text style={{fontSize:18}}>X-1stPlayer</Text>
          <Text style={{fontSize:18}}>O-2ndPlayer</Text>
        </View>
        <View style={{alignSelf:'center',marginRight:10,marginBottom:20}}>
        <Button title="Reset" style={styles.button} onPress={this.resetGame} type="clear" />
        </View>
        <Grid style={styles.grid}>
          <Col>
          <TouchableOpacity onPress={this.addCount00}>
          <Row style={styles.row}><Text>{count00}</Text></Row>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addCount10}>
            <Row style={styles.row}><Text>{count10}</Text></Row>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addCount20}>
            <Row style={styles.row}><Text>{count20}</Text></Row>
          </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={this.addCount01}>
    <Row style={styles.row}><Text>{count01}</Text></Row>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addCount11}>
    <Row style={styles.row}><Text>{count11}</Text></Row>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addCount21}>
    <Row style={styles.row}><Text>{count21}</Text></Row>
          </TouchableOpacity>
          </Col>
          <Col>
          <TouchableOpacity onPress={this.addCount02}>
    <Row style={styles.row}><Text>{count02}</Text></Row>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addCount12}>
    <Row style={styles.row}><Text>{count12}</Text></Row>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addCount22}>
    <Row style={styles.row}><Text>{count22}</Text></Row>
          </TouchableOpacity>
          </Col>
        </Grid>
        {winner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    alignSelf:'center',
    marginBottom:0
  },
  grid:{
    backgroundColor:"#fff",
    margin:50,
    marginBottom:300
  },
  row:{
    height:70,
    borderWidth:0.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ccc'
  }
});


export default App;
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Col,Row,Grid} from 'react-native-easy-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';


class Tictactoe extends Component{
    state={
        count00:null,
        count10:null,
        count20:null,
        count01:null,
        count11:null,
        count21:null,
        count02:null,
        count12:null,
        count22:null
      }
    
      addCount00=()=>{
        this.setState({
          count00:'X'
        });
      }
      addCount10=()=>{
        this.setState({
          count10:'X'
        });
      }
      addCount20=()=>{
        this.setState({
          count20:'X'
        });
      }
      addCount01=()=>{
        this.setState({
          count01:'X'
        });
      }
      addCount11=()=>{
        this.setState({
          count11:'X'
        });
      }
      addCount21=()=>{
        this.setState({
          count21:'X'
        });
      }
      addCount02=()=>{
        this.setState({
          count02:'X'
        });
      }
      addCount12=()=>{
        this.setState({
          count12:'X'
        });
      }
      addCount22=()=>{
        this.setState({
          count22:'X'
        });
      }
    render(){
        const {count00,count10,count20,count01,count11,count21,count02,count12,count22} = this.state;
        return(
            <View>
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
            </View>
        );
    }
}

const styles=StyleSheet.create({
    grid:{
        marginTop:250
      },
      row:{
        height:70,
        borderWidth:0.5,
        justifyContent:'center',
        alignItems:'center'
      }
})

export default Tictactoe;
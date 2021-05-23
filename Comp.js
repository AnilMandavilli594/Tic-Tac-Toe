import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';


class Comp extends Component{
    render(){
        return(
            <View>
                <Grid style={{marginTop:250}}>
                    <Col>
                        <Row>
                            <Text>1</Text>
                        </Row>
                    </Col>
                </Grid>
            </View>
        );
    }
}

export default Comp;
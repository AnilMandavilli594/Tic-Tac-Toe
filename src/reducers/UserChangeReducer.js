import {USER_CHANGED} from '../actions/types';

const INITIAL_STATE ={presentuser:'a'};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case USER_CHANGED:
            let x = state.presentuser;
            if(x==='a'){
                return {...state,presentuser:'b'}
            }else if(x==='b'){
                return {...state,presentuser:'a'}
            }
            return state;
        default:
            return state;
    }
};
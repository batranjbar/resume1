import Consts from '../consts'

const initialState={
    backgroundColor : 'lightgreen'
}

export const backgroundColor=( state= initialState.backgroundColor, action )=>{

    switch (action.type) {
        case Consts.SET_BACKGROUND_COLOR:
            
            return action.payload
    
        default:
            return state;
    }

}
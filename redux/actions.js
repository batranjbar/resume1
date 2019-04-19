import Consts from './consts'

export const setBackgrounColor=(value)=>{
    return {
        type: Consts.SET_BACKGROUND_COLOR ,
        payload: value
    }
}
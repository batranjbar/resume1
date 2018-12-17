import React,{Component} from 'react';

const Brush1  =(props)=>{

        return (
            <div>
         <div
         onClick={props.onClick}
          style={{
                    display: "flex", 
                    flexDirection: "row",
                    alignItems:"center",  
                    justifyContent: "center",
                     marginBottom:"-34px",
                    transform:"translateY(-45px)"
                }}>
          </div>
    <div align="middle" style={{
                    maxWidth:"90px"
                }}>
    <img src={props.1} width="30" height="30"  >
    </img>

        </div>
    </div>
        ) 
    }

export default Brush1;




import React,{Component} from 'react';

const DownIcon3  =(props)=>{


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
    <div style={{
                    maxWidth:"90px"
                }}>
    <img src={props.icon} width="30" height="30"/>

        </div>
    </div>
        ) 
    }

export default DownIcon3;




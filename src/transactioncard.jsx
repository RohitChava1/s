import React from 'react'
import {Button, Card} from"@material-ui/core"
import CheckIcon from '@material-ui/icons/Check';
import "./trans.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



function Transactioncard({props}) {
    // const te
 
   console.log(props.startDate)
   var date=  new Date(props.startDate).toLocaleString('en-US', {
    weekday: 'short', // long, short, narrow
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
})
    return (
        
        <div className={props.direction===1?"right":"left"} style={{display:"flex"
        ,flexDirection:"column",width:"100%"}}>
        <div className="cardd">
            
           <div className="header">
               <div style={{"font-size": "x-large", "font-weight": 900}}>{props.amount}</div>
               <div>
                  {props.type===1? <CheckIcon style={{fontSize:15,paddingRight:5,alignSelf:'end'}}/>:""}
                   <text style={{alignSelf:'start',fontSize:"small"}}>{props.type===1?"you paid":props.direction===1?"you requested":"Request Recieved"}</text>
                </div>
            </div>
            <div className="header">
              { props.status===2?(<div style={{"font-size": "x-large", "font-weight": 900,display:'flex',flexDirection:"column",alignContent:"flex-start"}}>
                   <div style={{    "font-size": "small",textAlign:"start"}}>Transaction id</div>
                 <div style={{    "font-size": "small",textAlign:"start"}}>{props.id}</div>
                   </div>):props.direction===1?(<><Button variant="outlined" size ="small"> Cancel</Button></>):(<div style={{display:"flex",flexDirection:"row"}} ><Button variant="outlined" size ="small"> Pay</Button><Button variant="outlined" size ="small" style={{marginLeft:10}}> Decline</Button></div>)}
               <div>
                   <NavigateNextIcon fontSize={'large'} style={{fontWeight:"300", paddingRight:5,alignSelf:'end'}}/>
                   
                </div>
            </div>
         
        </div>
        <div style={{fontSize:'12px',paddingTop:10}}>{ date}</div>
      
            
        </div>
    )
}

export default Transactioncard

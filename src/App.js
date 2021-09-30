
import './App.css';
import { useEffect, useState } from 'react';
import Transactioncard from './transactioncard';
import ButtonAppBar from './Appbar';

function App() {
 const [data, setdata] = useState([])
var prevdate;
  useEffect(()=>{
    
    fetch('https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2')
        .then(response => response.json())
        .then(data =>
          setdata(data));


  },[])
  if(data.length===0){
    return(<>loading</>)
  }
  else{  return (
    <div className="App">
      <ButtonAppBar/>

      <main>
        
      {  data.transactions.map((datas,i)=>{console.log(i,datas,"sa") 
       var d=new Date(datas.startDate).toLocaleString('en-US', {
        // long, short, narrow
        day: 'numeric', // numeric, 2-digit
      
    })
      if(i===0){
        prevdate=d
        return(<><div className="Datewise"><hr/><div style={{flex:1,}}>{new Date(datas.startDate).toLocaleString('en-US', {

          day: 'numeric', 
          month: 'long',// numeric, 2-digit
          year: 'numeric', // numeric, 2-digit
           // numeric, 2-digit, long, short, narrow
         })}</div><hr/></div>
          <Transactioncard props= {datas}/>
          
         </>)}
         else if(prevdate!==d)
         {  prevdate=d;
           return(<><div className="Datewise"><hr/><div style={{flex:1,}}>{new Date(datas.startDate).toLocaleString('en-US', {

          day: 'numeric', 
          month: 'long',// numeric, 2-digit
          year: 'numeric', // numeric, 2-digit
           // numeric, 2-digit, long, short, narrow
         })}</div><hr/></div>
          <Transactioncard props= {datas}/>
         </>)}
         else{
          prevdate=d;
           return(<>

      <Transactioncard props= {datas}/></>
        )}})}
      {/* <div className="Datewise"><hr/><div style={{flex:1,}}>23-jan</div><hr/></div> */}

</main>

      

     
    </div>
  );}

}

export default App;

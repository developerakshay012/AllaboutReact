import './App.css'
import Item from './components/item'
import ItemDate from './Components/ItemDate';
import Card from './Components/card';


function App() {

  // const itemTwoname= "surexcel" //second way of props

  //third way of give the props
   const response =[

  {
    itemname1 :"Nirma",
    itemdate:"20",
    itemyear:"1998",
    itemmonth:"June"
  },
  {
    itemname1 :"surfexel",
    itemdate:"10",
    itemyear:"2000",
    itemmonth:"July"
  },
   {
    itemname1 :"555",
    itemdate:"07",
    itemyear:"2002",
    itemmonth:"august"
  }
];

  return (

    <div>
     
     <Card>
       <Item name = {response[0].itemname1}>
      </Item>
      <ItemDate day = {response[0].itemdate} month = {response[0].itemmonth} year = {response[0].itemyear}></ItemDate>

      <Item name = {response[1].itemname1}></Item>
      <ItemDate day = {response[1].itemdate} month = {response[1].itemmonth} year = {response[1].itemyear} ></ItemDate>

      <Item name = {response[2].itemname1}></Item>
      <ItemDate day = {response[2].itemdate} month = {response[2].itemmonth} year = {response[2].itemyear}></ItemDate>

      <div className='head'> hello </div>
     </Card>
    
    </div>
   
  )
}

export default App;

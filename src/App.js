import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import Country from './country'

function App() {
  
  const [countryList,setCountryList] = useState([])
  const [noOfItems,setNoOfItems] = useState(5)
const [privilege,setPrivilege] = useState('admin')


useEffect(() => {
 getCountryList(noOfItems)
}, [])


const getCountryList = (noOfItems) => {
 
  axios
  .get(`http://13.57.235.126:5000/countries`)
  .then((response) => {
   
  
var items = response.data.countries && response.data.countries.length > 0 && response.data.countries.slice(0, noOfItems).map((i) => i)

console.log(items,"items")
    setCountryList(items)

  });
 
};


const addCountry = (name) => {
 
  
  axios
  .get(`http://13.57.235.126:5000/addcountry?name=`+name)
  .then((response) => {
alert('Country added successfully')
   

  })
  .catch((err)=>{
   alert('Please add Unique country name')
  })
 
};

const loadMore = (noOfItems)=>{
getCountryList(noOfItems)
setNoOfItems(noOfItems)

}



  return (
    <div className="App">
      {privilege === 'admin' ?
      <>
        <span>Role : Admin</span> <button onClick={()=>setPrivilege('user')}>Change to User</button>
        </>
    :
    <>
    <span>Role : User</span> <button onClick={()=>setPrivilege('admin')}>Change to Admin</button>
    </>
    }

   <Country countryList={countryList} loadMore={loadMore} noOfItems={noOfItems} addCountry={addCountry} privilege={privilege} />
      
       
    </div>
  );
}

export default App;

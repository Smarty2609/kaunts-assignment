import list from './csvjson.json'
import React, {useState} from 'react';
import './App.css';
// gaurav@kuants.in
// ayush@kuants.in
function App() {
 
  const[posts,setPosts] = useState(list);

const [ inputData, setInput] = React.useState("");
const replica =list;


const handleSearch = (e) =>{
  setInput(e.target.value);
  filteredItems(e.target.value);
};

const filteredItems = (searchTweet)=> {
   let searchtweet = searchTweet.toLowerCase();
  let  filteredList =  replica.filter((item)=>{
      return item.tweet.toLowerCase().includes(searchtweet);
    })
    setPosts(filteredList)   
  }
  
  


  return (
    <div className="App">
      <input type="text" placeholder='Search here..' value={inputData} onChange={handleSearch}></input>
      <ul>
        {inputData && posts.map((items)=>{ 
          return  <li key={items.id}>{items.tweet}</li>
        })} 
      </ul>
    </div>
  );
}

export default App;

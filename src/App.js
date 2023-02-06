import React,{useState} from 'react';
import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);
  const onAddUser=(uName,uAge)=>{
    setUsersList(prevList=>[...prevList,{id:Math.round(Math.random()*100).toString(),name:uName,age:uAge}])
  };
  return (
    <div>
      <AddUser onAddUser={onAddUser}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;

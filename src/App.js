import React,{useState} from 'react';
import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);
  const onAddUser=(uName,uAge)=>{
    setUsersList(prevList=>[...prevList,{id:Math.round(Math.random()*100).toString(),name:uName,age:uAge}])
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUser}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;

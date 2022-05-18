import React, {useState} from 'react';
import '../style/userFome.css';
import UserList from './UserList';

export  function UserFome() {
    const [userDetail, setUserDetail] = useState({
        userName:'',
        profile:'',
        age:''
    })
    const [userListItems, setUserList] = useState([])

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUserDetail({
            ...userDetail,
            [name]:value,   
        });   
                
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserList(userListItems => [...userListItems,userDetail]);  
    
    }

  return (
      <>
      <div className='Parent_container'>
        <UserList userlist={userListItems}/>
       <div className='hero_fome_container'>
            <h2>user Fome</h2>
            <form className="user_fome_container" autoComplete="off"> 
                <input type="text" className='input-box' 
                placeholder='Enter User Name' 
                name="userName"
                value={userDetail.userName} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                className='input-box' 
                placeholder='Enter user profile' 
                name="profile"
                value={userDetail.profile}
                onChange={handleChange}
                />
                <input 
                type="number" 
                className='input-box' 
                placeholder='Enter user Age' 
                name ="age"
                value={userDetail.age}
                onChange={handleChange}
                />
                <input type="submit" 
                 className='submit-btn'                 
                onClick={handleSubmit}
               />             
            </form>
        </div>  
        </div>
      </>
   
  )
}


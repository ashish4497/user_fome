import React,{useEffect} from 'react'
import '../style/userlist.css'


export default function UserList(props) {
    const userList = props.userlist;
    console.log(userList);


    const handleEditClick = (index) => {
        console.log(index,"check edit");
    }

    const handleRemoveClick = (index) => {
        console.log(index,"check edit");
        userList.splice(index,0)   
    }

  return (    
    <div>
        <h2 className='list-heading'>userList</h2>
        {
          userList && userList.map((user,index)=>{
              return(     
                  <div key={index} className="hero-container"> 
                   <div className='col-2'>
                   <span className='user-info'> Name : {user.userName}</span>
                  <span>
                  <i className="fas fa-edit" onClick={ () =>handleEditClick(index)}/>
                    <i className="fas fa-trash-alt" onClick={ () =>handleRemoveClick(index)}/> 
                    </span>                   
                   </div>
                    <p className='user-info'> Profile : {user.profile}</p>    
                    <p className='user-info'> Age : {user.age}</p>
                 </div>                
              )
          })  
        }
    </div>
  )
}

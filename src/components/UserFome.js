import React, { useState } from 'react';
import '../style/userFome.css';

export function UserFome() {
	const [userDetail, setUserDetail] = useState({
		userName:'',
		profile: '',
		age: ''
	});
	const [userListItems, setUserList] = useState([]);
	const [isEdit, setIsEdit] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setUserDetail({
			...userDetail,
			[name]: value,
		});
	}

	const handleSubmit =  (e) => {
		e.preventDefault();
	
	if(userDetail.userName === '' || userDetail.profile === '' || userDetail.age === '') {
			alert("please fill input fields")
		} else {
			setUserList(userListItems => [...userListItems, userDetail]);	
		}
	}

	const handleEditClick = (user,id) => {
		setIsEdit(true)
		setUserDetail(user)
		// const index = userListItems.indexOf(user)
		// console.log(index,id,"index");
		// if(index !== id) {
		// 	setUserList([...userListItems, userDetail])
		// }
	}

	const handleRemoveClick = (id) => {
		if (id !== -1) {
			userListItems.splice(id, 1);
		}
		setUserList([...userListItems])
	}

	const handleUpdate = (e,id) => {
		e.preventDefault()
		console.log(userListItems,"log id");	
		// setUserList(
		// [	...userListItems,
		// 	userDetail]
		// )
		// const index = userListItems.indexOf(userDetail)
		// console.log(index,"index");
		// setUserList([userDetail]);
		setIsEdit(false)
		handleEditClick(userDetail)
	}
	console.log(userListItems,"log");
	return (
		<>
			<div className='Parent_container'>
				<div>
					<h2 className='list-heading'>userList</h2>
					{
						userListItems && userListItems?.map((user,id) => {
							return (
								<div key={id} className="hero-container">
									<div className='col-2'>
										<span className='user-info'> Name : {user.userName}</span>
										<span>
											<i className="fas fa-edit" onClick={() => handleEditClick(user,id)} />
											<i className="fas fa-trash-alt" onClick={() => handleRemoveClick(id)} />
										</span>
									</div>
									<p className='user-info'> Profile : {user.profile}</p>
									<p className='user-info'> Age : {user.age}</p>
								</div>
							)
						})
					}
				</div>
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
						name="age"
						value={userDetail.age}
						onChange={handleChange}
					/> 
						{
							isEdit !== true ?
							<button  className='submit-btn' onClick={handleSubmit}>
							Submit								
							</button>	:
							<button  className='submit-btn' onClick={(e,id) =>handleUpdate(e,id)}>
								Update								
						</button>	
						}								
				</form>
				</div>
			</div>
		</>

	)
}


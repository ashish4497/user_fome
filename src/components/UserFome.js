import React, { useState } from 'react';
import '../style/userFome.css';


export function UserFome() {
	const [userDetail, setUserDetail] = useState({
		userName: null,
		profile: null,
		age: null
	})
	const [userListItems, setUserList] = useState([])

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setUserDetail({
			...userDetail,
			[name]: value,
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(userDetail.userName == null || userDetail.profile == null || userDetail.age == null) {
			alert("please fill input fields")
		} else {
			setUserList(userListItems => [...userListItems, userDetail]);
		}
		// userDetail.userName = '' 
		// userDetail.profile = ''
		// userDetail.age = ''
	}

	const handleEditClick = (index) => {
		console.log(index, "check edit");
	}

	const handleRemoveClick = (id) => {
		if (id !== -1) {
			userListItems.splice(id, 1);
		}
		setUserList([...userListItems])
	}

	return (
		<>
			<div className='Parent_container'>
				<div>
					<h2 className='list-heading'>userList</h2>
					{
						userListItems && userListItems?.map((user, id) => {
							return (
								<div key={id} className="hero-container">
									<div className='col-2'>
										<span className='user-info'> Name : {user.userName}</span>
										<span>
											<i className="fas fa-edit" onClick={() => handleEditClick(id)} />
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


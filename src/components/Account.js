import React, { useState } from 'react';
import '../styles/Account.css';

function Account() {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ideally, here you'd handle form submission, e.g., save to a backend
    setIsEditing(false);
    alert('Your account details have been updated!');
  };

  return (
    <div className="account-container">
      <h1>Account Details</h1>
      
      {!isEditing ? (
        <div className="account-info">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      ) : (
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="save-btn">Save Changes</button>
          <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default Account;

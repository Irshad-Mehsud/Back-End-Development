import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user");
        const result = await response.json();
        console.log("User Data:", result.data);
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // 🎨 Internal CSS styles
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const textStyle = {
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>User List</h2>
      {users.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No user data found.</p>
      ) : (
        <div style={containerStyle}>
          {users.map((user) => (
            <div key={user._id} style={cardStyle}>
              <div style={titleStyle}>{user.username}</div>
              <div style={textStyle}><strong>Email:</strong> {user.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;

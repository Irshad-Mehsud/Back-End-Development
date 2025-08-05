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
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f7fa',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '15px',
    padding: '20px',
    width: '280px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
    transition: 'transform 0.2s',
  };

  const cardHoverStyle = {
    ...cardStyle,
    ':hover': {
      transform: 'scale(1.03)',
    },
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '15px',
    border: '2px solid #ddd',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '6px',
  };

  const textStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '30px', fontSize: '28px' }}>User List</h2>
      {users.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '16px', color: '#888' }}>No user data found.</p>
      ) : (
        <div style={containerStyle}>
          {users.map((user) => (
            <div key={user._id} style={cardStyle}>
              {user.url && (
                <img
                  src={user.url}
                  alt={user.username}
                  style={imageStyle}
                />
              )}
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetailModal from "../components/UserDetailModal";
import "../styles/pages/main_page.css";
import searchIcon from "../images/search-icon.svg";
import phoneIcon from "../images/phone-icon.svg";
import mailIcon from "../images/mail-icon.svg";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (term = "") => {
    try {
      const response = await axios.get("http://localhost:3000", {
        params: { term },
      });
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching users");
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main-page">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
        <img src={searchIcon} alt="search" className="search-icon" />
      </div>
      <div className="user-cards">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleUserClick(user)}
          >
            <h3 className="user-card-name">{user.name}</h3>
            <p className="user-card-details">
              <img src={phoneIcon} alt="phone" className="user-card-icon" />
              {user.phone}
            </p>
            <p className="user-card-details">
              <img src={mailIcon} alt="mail" className="user-card-icon" />
              {user.email}
            </p>
          </div>
        ))}
      </div>
      <UserDetailModal user={selectedUser} onClose={handleClosePopup} />
    </div>
  );
};

export default MainPage;

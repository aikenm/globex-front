import React from "react";
import "../styles/components/user_detail_modal.css";

const UserDetailModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>{user.name}</h3>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>Position: {user.position_name}</p>
        <p>Department: {user.department}</p>
        <p>Hire Date: {user.hire_date}</p>
        <p>Address: {user.address}</p>
      </div>
    </div>
  );
};

export default UserDetailModal;

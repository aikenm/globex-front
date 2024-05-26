import React from "react";
import "../styles/components/user_detail_modal.css";

const UserDetailModal = ({ user, onClose }) => {
  if (!user) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3 className="modal-name">{user.name}</h3>

        <div className="user-details">
          <div className="user-detail">
            <span className="detail-label">Телефон:</span>
            <span className="detail-value">{user.phone}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Почта:</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Дата приема:</span>
            <span className="detail-value">{user.hire_date}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Должность:</span>
            <span className="detail-value">{user.position_name}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Подразделение:</span>
            <span className="detail-value">{user.department}</span>
          </div>
        </div>
        <p className="extra-title">Дополнительная информация:</p>
        <p className="modal-extra-info">
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </div>
  );
};

export default UserDetailModal;

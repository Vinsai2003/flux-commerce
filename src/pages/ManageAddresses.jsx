import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plus, MapPin, MoreVertical } from 'lucide-react';
import './ManageAddresses.css';

const ManageAddresses = () => {
  const { user } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [addresses, setAddresses] = useState([
    { id: 1, name: user?.firstName || 'User', mobile: user?.mobile || '9876543210', pincode: '500001', locality: 'Hitech City', address: 'Plot 42, Silicon Valley Layout', city: 'Hyderabad', state: 'Telangana', type: 'Work' }
  ]);

  return (
    <div className="addresses-page container">
      <div className="addresses-layout">
        <h1 className="page-title">Manage Addresses</h1>
        
        <div className="add-address-trigger section-white" onClick={() => setShowAddForm(!showAddForm)}>
          <Plus size={20} color="var(--primary)" />
          <span>ADD A NEW ADDRESS</span>
        </div>

        {showAddForm && (
          <div className="address-form section-white">
            <h3 className="form-subtitle">ADD A NEW ADDRESS</h3>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="10-digit mobile number" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Pincode" />
              <input type="text" placeholder="Locality" />
            </div>
            <div className="form-row textarea">
              <textarea placeholder="Address (Area and Street)"></textarea>
            </div>
            <div className="form-row">
              <input type="text" placeholder="City/District/Town" />
              <select>
                <option>Select State</option>
                <option>Telangana</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>
            </div>
            <div className="form-actions">
              <button className="save-btn" onClick={() => setShowAddForm(false)}>SAVE</button>
              <button className="cancel-link" onClick={() => setShowAddForm(false)}>CANCEL</button>
            </div>
          </div>
        )}

        <div className="address-list">
          {addresses.map(addr => (
            <div key={addr.id} className="address-card section-white">
              <div className="address-header">
                <span className="addr-type">{addr.type}</span>
                <button className="menu-dot"><MoreVertical size={18} /></button>
              </div>
              <div className="addr-user">
                <span className="name">{addr.name}</span>
                <span className="mobile">{addr.mobile}</span>
              </div>
              <p className="addr-text">
                {addr.address}, {addr.locality}, {addr.city}, {addr.state} - <b>{addr.pincode}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAddresses;

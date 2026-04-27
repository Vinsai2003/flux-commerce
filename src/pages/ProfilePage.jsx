import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Package, MapPin, Power, ChevronRight } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user, updateProfile, logout } = useAuth();
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: user?.firstName || user?.username || '',
    lastName: user?.lastName || '',
    gender: user?.gender || ''
  });

  const handlePersonalSave = () => {
    updateProfile(personalInfo);
    setIsEditingPersonal(false);
  };

  return (
    <div className="profile-page container">
      <div className="profile-layout">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="user-card section-white">
            <div className="user-avatar">
              <img 
                src={`https://ui-avatars.com/api/?name=${user?.firstName || user?.username}&background=2874f0&color=fff`} 
                alt="Profile" 
                className="profile-demo-photo"
              />
            </div>
            <div className="user-greeting">
              <span className="small-txt">Hello,</span>
              <span className="big-txt">{user?.firstName || user?.username}</span>
            </div>
          </div>

          <div className="sidebar-menu section-white">
            <Link to="/orders" className="menu-group">
              <div className="menu-header">
                <Package size={20} color="var(--primary)" />
                <span>MY ORDERS</span>
                <ChevronRight size={18} className="arrow" />
              </div>
            </Link>
            
            <div className="menu-group">
              <div className="menu-header active">
                <User size={20} color="var(--primary)" />
                <span>ACCOUNT SETTINGS</span>
              </div>
              <ul className="submenu">
                <li className="active">Profile Information</li>
                <li><Link to="/addresses">Manage Addresses</Link></li>
                <li>PAN Card Information</li>
              </ul>
            </div>

            <div className="menu-group logout-item" onClick={logout}>
              <div className="menu-header">
                <Power size={20} color="var(--primary)" />
                <span>LOGOUT</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="profile-content section-white">
          <div className="info-section">
            <div className="section-title">
              <h2>Personal Information</h2>
              {!isEditingPersonal ? (
                <button className="edit-link" onClick={() => setIsEditingPersonal(true)}>Edit</button>
              ) : (
                <button className="cancel-link" onClick={() => setIsEditingPersonal(false)}>Cancel</button>
              )}
            </div>

            <div className={`form-grid ${isEditingPersonal ? 'editing' : ''}`}>
              <div className="form-group">
                <input 
                  type="text" 
                  value={personalInfo.firstName}
                  readOnly={!isEditingPersonal}
                  onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  value={personalInfo.lastName}
                  readOnly={!isEditingPersonal}
                  onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                  placeholder="Last Name"
                />
              </div>
            </div>

            {isEditingPersonal && (
              <div className="gender-section">
                <p>Your Gender</p>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={personalInfo.gender === 'male'}
                      onChange={() => setPersonalInfo({...personalInfo, gender: 'male'})}
                    /> Male
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={personalInfo.gender === 'female'}
                      onChange={() => setPersonalInfo({...personalInfo, gender: 'female'})}
                    /> Female
                  </label>
                </div>
                <button className="save-btn" onClick={handlePersonalSave}>SAVE</button>
              </div>
            )}

            {!isEditingPersonal && personalInfo.gender && (
              <div className="gender-display">
                <p>Your Gender</p>
                <div className="radio-display">{personalInfo.gender}</div>
              </div>
            )}
          </div>

          <div className="info-section mt-40">
            <div className="section-title">
              <h2>Email Address</h2>
              <button className="edit-link">Edit</button>
            </div>
            <div className="form-group single">
              <input type="email" value={user?.email || ''} readOnly />
            </div>
          </div>

          <div className="info-section mt-40">
            <div className="section-title">
              <h2>Mobile Number</h2>
              <button className="edit-link">Edit</button>
            </div>
            <div className="form-group single">
              <input type="text" value={user?.mobile || ''} readOnly />
            </div>
          </div>

          <div className="faqs section-white">
            <h3>FAQs</h3>
            <div className="faq-item">
              <h4>What happens when I update my email address (or mobile number)?</h4>
              <p>Your login email id (or mobile number) changes, likewise. You'll receive all your future order details and communications on your new address (or mobile number).</p>
            </div>
            <div className="faq-item">
              <h4>When will my account be updated with the new email address (or mobile number)?</h4>
              <p>It happens instantly. After you submit the new email address (or mobile number), you will receive a verification code. Once you enter the verification code, your account will be updated.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;

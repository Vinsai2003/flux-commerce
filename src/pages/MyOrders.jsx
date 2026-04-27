import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './MyOrders.css';

const MyOrders = () => {
  // Mock data for orders
  const orders = [
    { id: 'FLUX-123456', date: '25 Oct 2023', total: 1250, status: 'Delivered', items: 3 },
    { id: 'FLUX-654321', date: '12 Nov 2023', total: 850, status: 'On the way', items: 1 }
  ];

  return (
    <div className="orders-page container">
      <div className="orders-layout">
        <h1 className="page-title">My Orders</h1>
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card section-white">
              <div className="order-header">
                <div>
                  <p className="small-txt">ORDER PLACED</p>
                  <p>{order.date}</p>
                </div>
                <div>
                  <p className="small-txt">TOTAL</p>
                  <p>${order.total.toFixed(2)}</p>
                </div>
                <div className="order-id-group">
                  <p className="small-txt">ORDER # {order.id}</p>
                </div>
              </div>
              <div className="order-body">
                <div className="order-status">
                  <div className={`status-dot ${order.status.toLowerCase().replace(' ', '-')}`}></div>
                  <span>{order.status}</span>
                </div>
                <p>{order.items} Items in this order</p>
                <button className="view-details">Order Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

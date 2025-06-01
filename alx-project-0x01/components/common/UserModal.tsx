import React, { useState } from 'react';
import './UserModal.css';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: UserData) => void;
}

interface UserData {
  id?: number; // optional because new user may not have id yet
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Nested fields for address and company
    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation could be added here if needed
    onAddUser(formData);
    onClose();
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <h2 className="modalHeader">Add New User</h2>
        <form className="modalForm" onSubmit={handleSubmit}>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} />

          <h3>Address</h3>
          <label htmlFor="address.street">Street</label>
          <input type="text" id="address.street" name="address.street" value={formData.address.street} onChange={handleChange} />

          <label htmlFor="address.suite">Suite</label>
          <input type="text" id="address.suite" name="address.suite" value={formData.address.suite} onChange={handleChange} />

          <label htmlFor="address.city">City</label>
          <input type="text" id="address.city" name="address.city" value={formData.address.city} onChange={handleChange} />

          <label htmlFor="address.zipcode">Zipcode</label>
          <input type="text" id="address.zipcode" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} />

          <h3>Company</h3>
          <label htmlFor="company.name">Name</label>
          <input type="text" id="company.name" name="company.name" value={formData.company.name} onChange={handleChange} />

          <label htmlFor="company.catchPhrase">Catch Phrase</label>
          <input type="text" id="company.catchPhrase" name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} />

          <label htmlFor="company.bs">BS</label>
          <input type="text" id="company.bs" name="company.bs" value={formData.company.bs} onChange={handleChange} />

          <div className="modalButtons">
            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

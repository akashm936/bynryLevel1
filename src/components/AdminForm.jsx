import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function AdminForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({ name: '', photo: '', description: '' });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', photo: '', description: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.photo || !formData.description) {
      toast.error('All fields are required!');
      return;
    }
    onSubmit(formData);
    setFormData({ name: '', photo: '', description: '' }); // Reset form
  };

  return (
    <form className="bg-white p-6 shadow rounded" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={formData.photo}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
}

export default AdminForm;




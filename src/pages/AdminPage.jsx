import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';
import { toast } from 'react-toastify';

const initialProfiles = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    description: 'Software Developer',
    location: { lat: 51.505, lng: -0.09 },
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    description: 'UI/UX Designer',
    location: { lat: 51.515, lng: -0.1 },
  },
];

function AdminPage() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [editingProfile, setEditingProfile] = useState(null);

  // Add or Update Profile
  const handleSaveProfile = (profileData) => {
    if (editingProfile) {
      // Update existing profile
      setProfiles((prev) =>
        prev.map((profile) =>
          profile.id === editingProfile.id ? { ...profile, ...profileData } : profile
        )
      );
      toast.success('Profile updated successfully!');
    } else {
      // Add new profile
      const newProfile = {
        ...profileData,
        id: Date.now(), // Generate a unique ID
        location: { lat: 51.505, lng: -0.09 }, // Default location for demonstration
      };
      setProfiles((prev) => [...prev, newProfile]);
      toast.success('Profile added successfully!');
    }

    setEditingProfile(null); // Reset editing state
  };

  // Delete Profile
  const handleDeleteProfile = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
    toast.info('Profile deleted!');
  };

  // Edit Profile
  const handleEditProfile = (profile) => {
    setEditingProfile(profile);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-6">
        <AdminForm
          onSubmit={handleSaveProfile}
          initialData={editingProfile}
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={profile.photo}
              alt={`${profile.name}'s photo`}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-2">{profile.name}</h3>
            <p className="text-gray-600 text-center">{profile.description}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEditProfile(profile)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;

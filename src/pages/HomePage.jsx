import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapView from '../components/MapView';
import SearchBar from '../components/SearchBar';

const mockProfiles = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'john.jpg',
    description: 'Software Developer',
    location: { lat: 51.505, lng: -0.09 },
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'jane.jpg',
    description: 'UI/UX Designer',
    location: { lat: 51.515, lng: -0.1 },
  },
];

function HomePage() {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (query) => {
    const filtered = mockProfiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setProfiles(filtered);
  };

  const handleSummaryClick = (profile) => {
    setSelectedLocation(profile.location);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Bar Section */}
      <div className="mb-8 flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Profile Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>

      {/* Map Section */}
      {selectedLocation && (
        <div className="mt-12 w-full h-96">
          <MapView location={selectedLocation} />
        </div>
      )}
    </div>
  );
}

export default HomePage;

import React from "react";

function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-4">{profile.name}</h3>
      <p className="text-gray-500 text-center">{profile.description}</p>
      <button
        className="mt-4 text-blue-500 hover:underline"
        onClick={() => onSummaryClick(profile)}
      >
        View Location
      </button>
    </div>
  );
}

export default ProfileCard;

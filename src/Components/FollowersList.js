import React from 'react';

const FollowersList = ({ followers }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-[400px] h-[250px]">
      <h3 className="text-xl font-semibold mb-4">Followers</h3>
      {followers.length === 0 ? (
        <p>No followers found.</p>
      ) : (
        <div className="h-[150px] overflow-y-auto">
          <ul>
            {followers.map((follower) => (
              <li key={follower.id} className="flex items-center mb-2">
                <img
                  src={follower.avatar_url}
                  alt={follower.login}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span className="text-lg">{follower.login}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FollowersList;

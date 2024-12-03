import { useState, useEffect } from 'react';

const useGithubData = (username) => {
  const [data, setData] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return; // Only fetch if username is provided
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        if (userResponse.ok) {
          setData(userData);
        } else {
          throw new Error(userData.message || 'User not found');
        }

        // Fetch followers data
        const followersResponse = await fetch(userData.followers_url);
        const followersData = await followersResponse.json();
        
        if (followersResponse.ok) {
          setFollowers(followersData);
        } else {
          throw new Error(followersData.message || 'Followers not found');
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { data, followers, loading, error };
};

export default useGithubData;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from './Components/SeachBar'
import UserProfile from './Components/UserProfile';
import useGithubData from './hooks/useGithubData';
import Navbar from './Components/Navbar';
import FollowersList from './Components/FollowersList';
import OverViewbar from './Components/OverViewbar';
import ChartSection from './Components/ChartSection';
import Logout from './Components/Logout';

const App = () => {
  const [username, setUsername] = useState('');
  const { data, followers, loading, error } = useGithubData(username);

  const handleSearch = (input) => {
    setUsername(input);
  };

  return (
    <Router>
      <div className="bg-sky-200">
        <Navbar data={data || {}} />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                {loading && <p className='text-center text-white'>Loading...</p>}
                {error && <p className='text-center text-red-600'>Error: {error}</p>}
                {data && <OverViewbar data={data} />}
                <div className='flex flex-wrap p-5 gap-4 justify-center'>
                  {data && <UserProfile data={data} />}
                  {Array.isArray(followers) && followers.length > 0 && <FollowersList followers={followers} />}
                  <ChartSection username={username} />
                </div>
              </>
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

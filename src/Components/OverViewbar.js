import React from 'react';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const OverViewbar = ({ data }) => {
  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center items-center mb-6 mt-6 p-4">
      <div className=' w-[150px] bg-white p-2 flex items-center rounded-lg shadow-lg'>
        <div className="bg-red-500 text-white rounded-full p-2">
          <MenuBookIcon />
        </div>
        <span className='ml-2' >Overview</span>
      </div>
      <div className="w-[150px] bg-white flex p-2 items-center rounded-lg shadow-lg ">
        <div className="bg-pink-500 text-white rounded-full p-2">
          <CardMembershipIcon/>
        </div>
        <div className="ml-2">
          <p>{data.public_repos}</p>
          <span>Repos</span>
        </div>
      </div>
      <div className="w-[150px] bg-white flex p-2 items-center rounded-lg shadow-lg ">
        <div className="bg-orange-300 text-white rounded-full p-2">
          <PeopleAltIcon/>
        </div>
        <div className="ml-2">
        <p>{data.followers}</p>
          <span>Followers</span>
        </div>
      </div>
      <div className="w-[150px] bg-white flex p-2 items-center rounded-lg shadow-lg ">
        <div className="bg-yellow-500 text-white rounded-full p-2">
          <PersonAddAltIcon/>
        </div>
        <div className="ml-2">
          <p>{data.following}</p>
          <span>Following</span>
        </div>
      </div>
      <div className="w-[190px] bg-white flex p-2 items-center rounded-lg shadow-lg ">
        <div className="bg-green-500 text-white rounded-full p-2">
          <GitHubIcon/>
        </div>
        <div className="ml-2">
          <p>{data.login}</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default OverViewbar;

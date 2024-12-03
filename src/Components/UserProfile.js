import React from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachmentIcon from '@mui/icons-material/Attachment';

const UserProfile = ({ data }) => {
  if (!data) return <p>No user data available</p>;


  return (
    <div className='w-[360px] bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 ml-4'>
      <div className='flex item-center'>
        <img src={data.avatar_url} alt={`${data.name}'s avatar`} className="w-20 h-20 rounded-full border-2 border-sky
        " />
        <div className='p-4'>
          <h2 >{data.name || 'Name not available'}</h2>
          <span className='font-cursive'>@{data.name}</span>
        </div>
      </div>
      <p className='w-[200] font-serif'>{data.bio || 'No bio available'}</p>
      <p> <BusinessIcon fontSize='small'/> {data.company || 'N/A'}</p>
      <p> <LocationOnIcon fontSize='small'/> {data.location || 'N/A'}</p>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer" className='text-blue-500 flex items-center gap-2 hover:underline'>
        <AttachmentIcon fontSize='small'/>www.gitubprofile.com
      </a>
    </div>
  );
};

export default UserProfile;

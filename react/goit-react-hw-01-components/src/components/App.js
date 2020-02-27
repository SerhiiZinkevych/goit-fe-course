import React from 'react';
import Profile from './Profile/Profile';
import user from '../user.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>
);

export default App;

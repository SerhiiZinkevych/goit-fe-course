import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';

import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendsList/friends.json';

// import styles from '../Styles.module.css';

const styles = {
  homeWork: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  taskTitle: {
    fontFamily: 'Arial',
  },
};

const App = () => (
  <div style={styles.homeWork}>
    <h2 style={styles.taskTitle}>Задание 1 - Профиль социальной сети</h2>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <h2 style={styles.taskTitle}>Задание 2 - Секция статистики</h2>

    <Statistics title="Upload stats" stats={statisticalData} />

    <h2 style={styles.taskTitle}>Задание 3 - Список друзей</h2>

    <FriendsList friends={friends} />

    <h2 style={styles.taskTitle}>Задание 4 - История транзакций</h2>
  </div>
);

export default App;

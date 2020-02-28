import React from 'react';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friendsList}>
    {friends.map(friend => (
      <FriendsListItem
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
      />
    ))}
  </ul>
);

export default FriendsList;

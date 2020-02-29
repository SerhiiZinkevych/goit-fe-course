import React from 'react';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
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

FriendsListItem.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendsList;

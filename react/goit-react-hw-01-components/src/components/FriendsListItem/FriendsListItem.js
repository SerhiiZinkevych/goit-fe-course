import React from 'react';
import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ id, isOnline, avatar, name }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendsListItem;

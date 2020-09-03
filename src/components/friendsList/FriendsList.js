import React from "react";
import { FriendListItem } from "./FriendListItem";
import PropTypes from "prop-types";

export function FriendsList({ friends }) {
  console.log("friendsssss", friends);
  return (
    <ul>
      {friends.map((friend) => {
        console.log("el", friend);
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}

FriendListItem.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

import React from "react";

function FriendList({ friends }) {
  return (
    <ul>
      {friends &&
        friends.map((friend) => {
          <li key={friend.id}>{friend.name}</li>;
        })}
    </ul>
  );
}
export default FriendList;

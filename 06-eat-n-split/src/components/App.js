import { useState } from "react";
import AddFriend from "./AddFriend";
import Friend from "./Friend";
import Bill from "./Bill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export const Button = function ({ children, click }) {
  return (
    <button className="button" onClick={click}>
      {children}
    </button>
  );
};

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [selectedFriend, setSelectFriend] = useState(null);

  function handleOpenAddFriend() {
    setOpenAddFriend(!openAddFriend);
    setSelectFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setOpenAddFriend(false);
  }

  function handleSelectForBill(friend) {
    // setSelectFriend(friend);
    setSelectFriend((curr) => (curr?.id === friend.id ? null : friend));
    setOpenAddFriend(false);
  }

  function handleSplitBill(value) {
    // console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onSelectionForBill={handleSelectForBill}
          selectedFriend={selectedFriend}
          friends={friends}
        />
        {openAddFriend && <AddFriend onAddFriends={handleAddFriend} />}
        <Button click={handleOpenAddFriend}>
          {openAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <Bill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelectionForBill, selectedFriend }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectionForBill={onSelectionForBill}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}

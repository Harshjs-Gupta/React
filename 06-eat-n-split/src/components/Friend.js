import { Button } from "./App";
export default function Friend({ friend, onSelectionForBill, selectedFriend }) {
  //   console.log(friend);
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.image} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button click={() => onSelectionForBill(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

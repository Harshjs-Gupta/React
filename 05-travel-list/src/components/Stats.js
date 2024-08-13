export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage =
    items.length === 0 ? 0 : Math.round((packedItem / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${numItem} items on your list, and already packed
          ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}

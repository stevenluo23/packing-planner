export default function Stats({ items }) {
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / items.length) * 100);

  return (
    <footer className="stats">
      {packed === items.length && packed !== 0 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : items.length !== 0 ? (
        <em>
          💼 You have {items.length} items on your list, and you already packed{" "}
          {packed} ({percentage}%)
        </em>
      ) : (
        <em>Start adding some items to your packing list 🚀</em>
      )}
    </footer>
  );
}

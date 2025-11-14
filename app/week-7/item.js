export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 mb-2  bg-gray-800 rounded w-65 mx-auto">
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-sm text-white-900-bold">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
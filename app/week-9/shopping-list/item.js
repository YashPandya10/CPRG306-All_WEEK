export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="p-3 border border-gray-300 rounded bg-white cursor-pointer hover:bg-blue-50 transition-colors"
            onClick={() => onSelect(name)}
        >
            <div className="font-semibold text-gray-800 text-lg">{name}</div>
            <div className="text-sm text-gray-600">
                Buy <span className="text-green-600 font-medium">{quantity}</span> in <span className="text-purple-600 font-medium">{category}</span>
            </div>
        </li>
    );
}
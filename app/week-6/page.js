import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}

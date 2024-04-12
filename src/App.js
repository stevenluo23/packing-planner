import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [items, setItems] = useLocalStorageState([], "items");
  const handleAddItems = (i) => setItems([...items, i]);
  const handleDeleteItem = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));

  const handleToggleItem = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const handleClearList = () => {
    if (items.length) {
      const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
      );
      if (confirmed) setItems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

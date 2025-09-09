import React from "react";

function ItemsList({ items, setItems, filterCategory }) {

  function markAsBought(id) {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, status: item.status === "MARK" ? "✓" : item.status }
        : item
    );
    setItems(updatedItems);
  }

  function deleteItems(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  const visibleItems =
    filterCategory && filterCategory !== "ALL"
      ? items.filter((item) => item.category === filterCategory)
      : items;

  return (
    <div>
      {visibleItems.map((item) => (
        <div key={item.id} className="grid grid-cols-[29%_20%_12%_12%_15%_7%_5%] w-full h-auto py-4 border-l-1 border-b-1 border-[#99acff]">
          <div className="pl-3 self-center break-words pr-6">{item.name}</div>
          <div className="self-center break-words pr-5">{item.category}</div>
          <div className="pr-3 text-left self-center break-words">{item.quantity}</div>
          <div className="pr-3 text-left self-center break-words">₱{item.price}</div>
          <div className="pr-6 text-left self-center break-words">₱{item.cost}</div>
          <div onClick={() => markAsBought(item.id)}
            className="text-center content h-6 self-center rounded-[5px] text-white cursor-pointer"
            style={{ backgroundColor: item.status === "MARK" ? "green" : "gray" }}>
            {item.status}
          </div>
          <div onClick={() => deleteItems(item.id)}
            className="ml-1 text-center bg-[red] content h-6 self-center rounded-[5px] text-white px-2 w-[max-content] cursor-pointer">
            X
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
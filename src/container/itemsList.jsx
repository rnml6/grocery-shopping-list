import React, { useState } from "react";

function ItemsList({ items, setItems }) {

  function markAsBought(index) {
    const updatedItems = [...items];

    if (updatedItems[index].status === "MARK") {
      updatedItems[index].status = "DONE";
      setItems(updatedItems);
      changeColor();
    }
  }

  function deleteItems(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div>

      {items.map((item, index) => (

        <div className="grid grid-cols-[28%_21%_12%_12%_15%_7%_5%] w-full h-auto py-4 border-l-1 border-b-1 border-[#99acff]" key={index}>
          <div className="pl-3 self-center break-words pr-2">{item.name}</div>
          <div className="text-center self-center break-words px-5">{item.category}</div>
          <div className="pr-3 text-left self-center break-words">{item.quantity}</div>
          <div className="pr-3 text-left self-center break-words">₱{item.price}</div>
          <div className="pr-6 text-left self-center break-words">₱{item.cost}</div>
          <div onClick={() => markAsBought(index)} className="text-center bg-[green] content h-6 self-center rounded-[5px] text-white" style={{ backgroundColor: item.status === 'MARK' ? 'green' : 'gray' }}>{item.status}</div>
          <div onClick={() => deleteItems(index)} className="ml-1 text-center bg-[red] content h-6 self-center rounded-[5px] text-white px-2 w-[max-content]">X</div>
        </div>
      ))}

    </div>
  );
}

export default ItemsList;

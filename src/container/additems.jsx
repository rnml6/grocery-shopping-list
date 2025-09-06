import React, { useState } from 'react';

function AddItems({ items, setItems }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [status] = useState("MARK");

  function addItem() {
    if (!name || !quantity || !category || !price) return;

    const cost = quantity * price;
    const newItem = { name, quantity, category, price, cost, status };
    setItems([...items, newItem]);

    setName("");
    setQuantity("");
    setCategory("");
    setPrice("");
  }

  return (
    <div className='bg-[white] rounded-[17px] flex flex-col py-5 px-12 gap-[18px]'>
      <h3 className='text-left w-full text-[30px]'>Items Details</h3>

      <div className='flex justify-between'>
        <h3 className='self-center'>Name:</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border border-black rounded-[7px] pl-2 p-1'
          placeholder='name...'
          type='text'
        />
      </div>

      <div className='flex justify-between'>
        <h3 className='self-center'>Quantity:</h3>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className='border border-black rounded-[7px] pl-2 p-1 [&::-webkit-inner-spin-button]:appearance-none'
          placeholder='quantity...'
          type='number'
        />
      </div>

      <div className='flex justify-between'>
        <h3 className='self-center'>Category:</h3>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='border border-black rounded-[7px] pl-2 p-1'
          placeholder='category...'
          type='text'
        />
      </div>

      <div className='flex justify-between'>
        <h3 className='self-center'>Price:</h3>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='border border-black rounded-[7px] pl-2 p-1 [&::-webkit-inner-spin-button]:appearance-none'
          placeholder='price...'
          type='number'
        />
      </div>

      <button onClick={addItem} className='py-[5px] rounded-[7px] bg-[#99acff]'>
        Add Item
      </button>
    </div>
  );
}

export default AddItems;

import React, { useState } from 'react'

function AddItems ({ items, setItems, overallBudget, setOverallBudget }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [status] = useState('MARK')

  const [inputValue, setInputValue] = useState('')

  function addItem () {
    if (!name || !quantity || !category || !price) return

    const cost = quantity * price
    const newItem = {
      id: Date.now(),
      name,
      category,
      quantity,
      price,
      cost,
      status
    }
    setItems([...items, newItem])
    setName('')
    setQuantity('')
    setCategory('')
    setPrice('')
  }

  function clearForm () {
    setName('')
    setQuantity('')
    setCategory('')
    setPrice('')
  }

  return (
    <div>
      <h3 className='container-label'>Item Details</h3>

      <div className='grid grid-cols-2 gap-6 max-[605px]:flex max-[605px]:flex-col max-[605px]:gap-3 max-[605px]:mt-1'>
        <div className='add-items-divs '>
          <label>NAME</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            placeholder='Enter name'
            className='add-items-fieldset '
          />
        </div>

        <div className='add-items-divs'>
          <label>QUANTITY</label>
          <input
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            type='number'
            placeholder='Enter quantity'
            className='add-items-fieldset [&::-webkit-inner-spin-button]:appearance-none'
          />
        </div>

        <div className='add-items-divs'>
          <label>CATEGORY</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className='add-items-fieldset'
          >
            <option hidden>Select category</option>
            <option value='CONDIMENTS'>Condiments</option>
            <option value='BEVERAGES'>Beverages</option>
            <option value='SNACKS'>Snacks</option>
            <option value='OTHERS'>Others</option>
          </select>
        </div>

        <div className='add-items-divs'>
          <label>PRICE</label>
          <input
            value={price}
            onChange={e => setPrice(e.target.value)}
            type='number'
            placeholder='Enter price'
            className='add-items-fieldset [&::-webkit-inner-spin-button]:appearance-none'
          />
        </div>
      </div>

      <div className='flex mt-8 gap-6 max-[605px]:mt-5'>
        <button onClick={addItem} className='add-item-button'>
          ADD ITEM
        </button>
        <button onClick={clearForm} className='add-item-clear'>
          CLEAR
        </button>
      </div>

      <div className='flex flex-col border-blue-600 border-t-2 mt-8 pt-4 max-[605px]:mt-5'>
        <h3 className='container-label'>BUDGET DETAILS</h3>

        <div className='flex items-center w-full gap-3 max-[605px]:flex-col'>
          <input
            type='number'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder='Enter budget'
            className='w-full [&::-webkit-inner-spin-button]:appearance-none add-items-fieldset '
          />

          <div className='flex items-center gap-3 max-[605px]:w-full max-[605px]:gap-6'>
            <button
              className='budget-button '
              onClick={() => setOverallBudget(Number(inputValue) || null)}
            >
              SAVE
            </button>

            <button
              className='clear-button'
              onClick={() => {
                setOverallBudget(0)
                setInputValue('')
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItems

import React, { useState, useEffect } from 'react'

function ItemsList ({ items, setItems, filterCategory }) {
  const [maxWidth, setMaxWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setMaxWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function markAsBought (id) {
    const updatedItems = items.map(item =>
      item.id === id
        ? { ...item, status: item.status === 'MARK' ? 'BOUGHT' : item.status }
        : item
    )
    setItems(updatedItems)
  }

  function deleteItems (id) {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  const visibleItems =
    filterCategory && filterCategory !== 'ALL'
      ? items.filter(item => item.category === filterCategory)
      : items

  return (
    <div>
      {visibleItems.map(item => (
        <div
          key={item.id}
          className='grid grid-cols-19 px-2 pt-3 pb-2 gap-2 items-center max-[1040px]:hidden'
        >
          <div className='col-span-7 text-[1.1rem] uppercase'>{item.name}</div>
          <div className='col-span-3 '>{item.category}</div>
          <div className='col-span-2'>x{item.quantity}</div>
          <div className='col-span-2'>₱{item.price}</div>
          <div className='col-span-3'>₱{item.cost}</div>
          <div className='flex col-span-2 justify-end'>
            <div
              onClick={() => markAsBought(item.id)}
              className={`items-list-mark-button 
                ${
                  item.status === 'MARK'
                    ? 'bg-gradient-to-br from-indigo-500 to-blue-600'
                    : 'bg-gray-500'
                }`}
            >
              {item.status === 'MARK' ? item.status : '✓'}
            </div>
            <div
              onClick={() => deleteItems(item.id)}
              className='items-list-clear'
            >
              ☓
            </div>
          </div>
          <div></div>
        </div>
      ))}

      {visibleItems.map(item => (
        <div
          key={item.id}
          className='res-item-list border border-blue-600 hidden my-3 px-3 py-2 rounded-xl shadow-sm max-[1040px]:block bg-white max-[420px]:rounded-none max-[420px]:border-b-1 max-[420px]:border-l-1 max-[420px]:ml-3.5 max-[420px]:pl-2 max-[420px]:rounded-l-xl max-[420px]:border-r-0'
        >
          <div className='flex justify-between gap-3 items-start px-1 py-1'>
            <div className='flex w-full gap-1 items-start flex-col'>
              <div className='text-[1.5rem] max-[700px]:text-[1.3rem] max-[518px]:text-[1.2rem] font-semibold capitalize leading-tight text-blue-700 max-[385px]:text-[1.2rem] max-[385px]:mb-1'>
                {item.name}
              </div>
              <div className='flex justify-between w-full items-center'>
                <div
                  className=' inline-block text-[0.75rem] bg-gradient-to-br 
          from-indigo-400 to-blue-500 text-white px-2 py-0.5 rounded-md 
          font-semibold tracking-wide shadow-sm max-[385px]:text-[0.8rem]'
                >
                  {item.category}
                </div>
                <div className='flex gap-1 h-fit'>
                  <div
                    onClick={() => markAsBought(item.id)}
                    className={`cursor-pointer text-[0.8rem] text-white px-2 py-1 rounded-md font-semibold
          ${
            item.status === 'MARK'
              ? 'bg-gradient-to-br from-indigo-500 to-blue-600'
              : 'bg-gray-500'
          }`}
                  >
                    {item.status === 'MARK' ? item.status : '✓'}
                  </div>

                  <div
                    onClick={() => deleteItems(item.id)}
                    className='bg-red-500 px-2 py-1 rounded-md text-white cursor-pointer text-[0.8rem] font-bold '
                  >
                    ☓
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between py-1 px-1 pl-2 pt-0.5 text-[0.85rem] max-[518px]:text-[0.7rem] text-gray-700'>
            <div className='flex gap-6'>
              <span>
                QTY:{' '}
                <strong className='text-[1rem] font-bold text-blue-700 max-[518px]:text-[0.9rem] '>
                  {Number(item.quantity).toLocaleString()}
                </strong>
              </span>
              <span>
                PRICE:{' '}
                <strong className='text-[1rem] font-bold text-blue-700 max-[518px]:text-[0.9rem] '>
                  ₱{Number(item.price).toLocaleString()}
                </strong>
              </span>
            </div>

            <div>
              TOTAL:{' '}
              <strong className='text-[1rem] font-bold text-blue-700 max-[518px]:text-[0.9rem] '>
                ₱{Number(item.cost).toLocaleString()}
              </strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsList

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
          className='grid grid-cols-15 pl-2 pt-3 pb-2 gap-2 items-center'
        >
          <div className='col-span-5 text-[1.1rem] uppercase'>{item.name}</div>
          <div className='col-span-3 '>{item.category}</div>
          <div className='col-span-2'>x{item.quantity}</div>
          <div className='col-span-2'>₱{item.price}</div>
          <div className='col-span-2'>₱{item.cost}</div>
          <div className='flex col-span-1 justify-end'>
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
          className='res-item-list hidden border-1 my-2 px-2 py-1 rounded-md'
        >
          <div className='flex justify-between gap-2 items-center py-1'>
            <div className='w-full text-[1rem]'>{item.name}</div>
            <div className='col-span-2 text-[0.8rem]'>x{item.quantity}</div>
            <div className='flex w-[max-content] gap-1 h-6'>
              <div
                onClick={() => markAsBought(item.id)}
                className='w-[max-content] px-2 rounded-[5px] text-white cursor-pointer'
                style={{
                  backgroundColor: item.status === 'MARK' ? 'green' : 'gray'
                }}
              >
                {maxWidth < 480 ? '✓' : item.status}
              </div>
              <div
                onClick={() => deleteItems(item.id)}
                className='w-[max-content] bg-[red] px-2 rounded-[5px] text-white cursor-pointer'
              >
                ☓
              </div>
            </div>
          </div>

          <div className='grid grid-cols-15  text-[0.8rem] gap-2'>
            <div className=' col-span-9 '>{item.category}</div>

            <div className=' col-span-2 '>₱{item.price}</div>

            <div className=' col-span-4 '>= ₱{item.cost}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsList

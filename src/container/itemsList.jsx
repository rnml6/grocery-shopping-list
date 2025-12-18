import React, { useState, useEffect } from 'react'

function ItemsList({ items, setItems, filterCategory }) {
  const [maxWidth, setMaxWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setMaxWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function markAsBought(id) {
    const updatedItems = items.map(item =>
      item.id === id
        ? { 
            ...item, 
            status: item.status === 'MARK' ? 'BOUGHT' : 'MARK' 
          }
        : item
    )
    setItems(updatedItems)
  }

  function deleteItems(id) {
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
          className='grid grid-cols-12 px-2 pt-3 pb-2 gap-2 items-center max-[1040px]:hidden'
        >
          <div className='col-span-4 text-[1.1rem] uppercase text-[#333446]'>{item.name}</div>
          <div className='col-span-3 text-[#273F4F]'>{item.category}</div>
          <div className='col-span-1 text-[#333446]'>x{item.quantity}</div>
          <div className='col-span-1 text-[#273F4F]'>₱{item.price}</div>
          <div className='col-span-2 text-[#333446] font-semibold'>₱{item.cost}</div>
          <div className='flex col-span-1 justify-end'>
            <div
              onClick={() => markAsBought(item.id)}
              className={`items-list-mark-button 
                ${
                  item.status === 'MARK'
                    ? 'bg-gradient-to-br from-[#273F4F] to-[#333446]'
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
        </div>
      ))}

      {visibleItems.map(item => (
        <div
          key={item.id}
          className={`bg-white rounded-xl p-4 px-0 pr-4 mb-3 shadow-sm hover:shadow-md transition-shadow duration-200 hidden max-[1040px]:block ${
            item.status === 'BOUGHT' ? 'opacity-80' : ''
          }`}
        >
          <div className='flex items-start gap-3'>
            <div className={`w-2 h-full min-h-[60px] rounded-full ${
              item.status === 'BOUGHT' ? 'bg-green-400' : 'bg-[#273F4F]'
            }`} />
            
            <div className='flex-1 min-w-0'>
              <div className='gap-2 flex justify-between items-start mb-2'>
                <div className='w-4/7'>
                  <h3 className='text-base sm:text-lg font-semibold text-[#333446] capitalize wrap-break-word'>
                    {item.name}
                  </h3>
                  <span className='text-xs text-[#273F4F]/70 mt-0.5 block'>{item.category}</span>
                </div>
                
                <div className='flex items-center gap-1'>
                  <button
                    onClick={() => markAsBought(item.id)}
                    className={`text-xs px-2 py-1 rounded ${
                      item.status === 'MARK'
                        ? 'bg-[#273F4F]/10 text-[#273F4F] hover:bg-[#273F4F]/20'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {item.status === 'MARK' ? 'Mark' : 'Undo'}
                  </button>
                  <button
                    onClick={() => deleteItems(item.id)}
                    className='text-xs px-2 py-1 bg-gradient-to-r from-[#ef4444]/10 to-[#b91c1c]/10 text-red-700 rounded hover:from-[#ef4444]/20 hover:to-[#b91c1c]/20'
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center gap-4'>
                  <div className='text-[#333446]'>
                    <span className='block text-xs text-[#273F4F]/70'>Quantity</span>
                    <span className='font-bold text-[#273F4F]'>{item.quantity}</span>
                  </div>
                  <div className='text-[#333446]'>
                    <span className='block text-xs text-[#273F4F]/70'>Price</span>
                    <span className='font-bold text-green-800'>₱{item.price}</span>
                  </div>
                </div>
                
                <div className='text-right'>
                  <div className='text-xs text-[#273F4F]/70'>Total</div>
                  <div className='text-lg font-bold text-[#333446]'>₱{item.cost}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemsList
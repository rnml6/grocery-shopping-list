import React, { useState, useEffect } from 'react'
import Budget from '../container/budget'
import AddItems from '../container/additems'
import ItemsList from '../container/itemsList'

function Content () {
  const [items, setItems] = useState([])
  const [filterCategory, setFilterCategory] = useState('')
  const [maxWidth, setMaxWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setMaxWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='h-[85vh] w-[90%] bg-[rgb(255,255,255,0.5)] justify-self-center mt-[-20px] rounded-[30px] flex justify-between p-[40px] whole_container'>
      <div className='w-[30%] flex flex-col gap-[20px] left_container'>
        <AddItems items={items} setItems={setItems} />
        <Budget items={items} />
      </div>

      <div className='w-[68%] bg-[white] rounded-[17px] pt-0 overflow-auto hide-scrollbar p-10 item_list_container'>
        <div className='sticky top-0 bg-[white]'>
          <div className='flex justify-between item_list_header items-center'>
            <div>
              <h1 className='text-4xl py-7 tracking-widest pl-8 text-[#5682B1]'>
                LIST OF ITEMS
              </h1>
            </div>
            <div className='content-center select_button_container flex h-[max-content] pt-3'>
              <div className='flex p-1 h-[max-content] items-center'>
                <label className='text-xs mr-2 w-[max-content] tracking-widest text-[#5682B1] font-semibold label_container'>
                  {maxWidth < 480 ? 'FILTER:' : 'FILTER BY:'}
                </label>
                <select
                  onChange={e => setFilterCategory(e.target.value)}
                  className='border-1 border-[#5682B1] text-[#5682B1] rounded-[7px] pl-1 p-1 text-sm mr-1 tracking-widest'
                >
                  <option defaultValue value='ALL'>
                    All
                  </option>
                  <option value='CONDIMENTS'>Condiments</option>
                  <option value='BEVERAGES'>Beverages</option>
                  <option value='SNACKS'>Snacks</option>
                  <option value='OTHERS'>Others</option>
                </select>
              </div>
              <button
                onClick={() => setItems([])}
                className='bg-[red] ml-4 h-[auto] py-1 px-10 tracking-widest text-white rounded-[13px] clear_button'
              >
                CLEAR
              </button>
            </div>
          </div>

          <div className='grid grid-cols-[29%_20%_13%_12%_15%_11%] w-full h-auto items_tablehead'>
            <div className='bg-[#99acff] pl-4 py-3 rounded-tl-[10px] text-xs tracking-widest font-medium'>
              NAME
            </div>
            <div className='bg-[#99acff] py-3 text-xs tracking-widest font-medium'>
              CATEGORY
            </div>
            <div className='bg-[#99acff] py-3 text-xs tracking-widest font-medium'>
              {maxWidth < 480 ? 'QTY' : 'QUANTITY'}
            </div>
            <div className='bg-[#99acff] py-3 text-xs tracking-widest font-medium'>
              PRICE
            </div>
            <div className='bg-[#99acff] py-3 text-xs tracking-widest font-medium'>
              COST
            </div>
            <div className='bg-[#99acff] py-3 text-xs tracking-widest font-medium rounded-tr-[10px]'>
              STATUS
            </div>
          </div>
        </div>

        <ItemsList
          filterCategory={filterCategory}
          items={items}
          setItems={setItems}
        />
      </div>
    </div>
  )
}

export default Content

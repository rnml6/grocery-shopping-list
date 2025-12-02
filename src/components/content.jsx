import React, { useState, useEffect } from 'react'
import Budget from '../container/budget'
import AddItems from '../container/additems'
import ItemsList from '../container/itemsList'

function Content () {
  const [items, setItems] = useState([])
  const [filterCategory, setFilterCategory] = useState('')
  const [maxWidth, setMaxWidth] = useState(window.innerWidth)
  const [overallBudget, setOverallBudget] = useState(0)

  useEffect(() => {
    const handleResize = () => setMaxWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='flex flex-col p-15 py-7 max-[890px]:p-10 max-[890px]:py-5 max-[672px]:p-5 max-[500px]:p-0'>
      <div className='flex gap-9 mb-6 max-[1040px]:flex-col max-[500px]:gap-5 max-[420px]:gap-3'>
        <div className='add-items-div '>
          <AddItems
            items={items}
            setItems={setItems}
            overallBudget={overallBudget}
            setOverallBudget={setOverallBudget}
          />
        </div>
        <div className='w-4/10 max-[1220px]:w-9/20 max-[1110px]:w-1/2 max-[1040px]:w-full'>
          <Budget items={items} overallBudget={overallBudget} />
        </div>
      </div>

      <div className='bg-white rounded-2xl p-10 py-6 shadow-2xl max-[605px]:px-6 max-[605px]:py-1 max-[500px]:rounded-none max-[500px]:pb-4 max-[420px]:px-0'>
        <div className='flex items-center justify-between py-3 max-[700px]:flex-col max-[700px]:items-start max-[1040px]:pb-0 max-[420px]:px-6 '>
          <h1 className='container-label'>LIST OF ITEMS</h1>

          <div className='flex w-1/3  gap-3 max-[1225px]:w-4/10 max-[1110px]:w-1/2 max-[890px]:w-3/5 max-[700px]:w-full'>
            <div className='content-div  filter-items'>
              <select
                onChange={e => setFilterCategory(e.target.value)}
                className='content-select'
              >
                <option className='content-option' defaultValue value='ALL'>
                  All
                </option>
                <option className='content-option' value='CONDIMENTS'>
                  Condiments
                </option>
                <option className='content-option' value='BEVERAGES'>
                  Beverages
                </option>
                <option className='content-option' value='SNACKS'>
                  Snacks
                </option>
                <option className='content-option' value='OTHERS'>
                  Others
                </option>
              </select>
            </div>

            <button onClick={() => setItems([])} className='content-clear'>
              CLEAR
            </button>
          </div>
        </div>

        <div className='content-header'>
          <div className='col-span-7'>Name</div>
          <div className='col-span-3'>Category</div>
          <div className='col-span-2'>Qty</div>
          <div className='col-span-2'>Price</div>
          <div className='col-span-3'>Cost</div>
          <div className='col-span-2 text-end'>Status</div>
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

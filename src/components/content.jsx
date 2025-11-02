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
    <div className='flex flex-col p-15 py-7'>
      <div className='flex gap-9 mb-6'>
        <div className='add-items-div'>
          <AddItems
            items={items}
            setItems={setItems}
            overallBudget={overallBudget}
            setOverallBudget={setOverallBudget}
          />
        </div>
        <div className='w-4/10'>
          <Budget items={items} overallBudget={overallBudget} />
        </div>
      </div>

      <div className='bg-white rounded-2xl p-10 py-6 shadow-2xl '>
        <div className='flex items-center justify-between py-3'>
          <h1 className='container-label'>LIST OF ITEMS</h1>

          <div className='flex w-1/3 gap-3'>
            <div className='content-div'>
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
              CLEAR ALL
            </button>
          </div>
        </div>

        <div className='content-header'>
          <div className='col-span-5'>Name</div>
          <div className='col-span-3'>Category</div>
          <div className='col-span-2'>Quantity</div>
          <div className='col-span-2'>Price</div>
          <div className='col-span-2'>Cost</div>
          <div className='col-span-1 text-end'>Status</div>
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

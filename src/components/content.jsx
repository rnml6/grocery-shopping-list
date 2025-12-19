import React, { useState } from 'react'
import Budget from '../container/budget'
import AddItems from '../container/additems'
import ItemsList from '../container/itemsList'
import { FiFilter } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

function Content () {
  const [items, setItems] = useState([])
  const [filterCategory, setFilterCategory] = useState('ALL')
  const [sortBy, setSortBy] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [overallBudget, setOverallBudget] = useState(0)
  const [activeTab, setActiveTab] = useState('all')
  const [showFilterPanel, setShowFilterPanel] = useState(false)

  const filteredItems = items
    .filter(item => {
      if (activeTab === 'pending') return item.status === 'MARK'
      if (activeTab === 'bought') return item.status === 'BOUGHT'
      return true
    })
    .filter(item => {
      if (!filterCategory || filterCategory === 'ALL') return true
      return item.category === filterCategory
    })
    .sort((a, b) => {
      if (!sortBy) return 0
      let valueA =
        sortBy === 'quantity'
          ? Number(a.quantity)
          : Number(a.quantity * a.price)
      let valueB =
        sortBy === 'quantity'
          ? Number(b.quantity)
          : Number(b.quantity * b.price)

      // Fixed sorting logic:
      // If asc: smaller values first (return -1 if A < B)
      // If desc: larger values first (return 1 if A < B)
      if (sortOrder === 'asc') {
        return valueA - valueB
      } else {
        return valueB - valueA
      }
    })

  return (
    <div className='flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-15 max-[500px]:p-0 min-h-screen bg-gradient-to-br from-blue-50/30 to-gray-50/50'>
      <div className='flex gap-9 mb-6 max-[1040px]:flex-col max-[500px]:gap-5 max-[420px]:gap-5 max-[500px]:mb-4'>
        <div className='add-items-div'>
          <AddItems
            items={items}
            setItems={setItems}
            overallBudget={overallBudget}
            setOverallBudget={setOverallBudget}
          />
        </div>
        <div className='w-4/10 max-[1220px]:w-9/20 max-[1110px]:w-1/2 max-[1040px]:w-full max-[500px]:px-6'>
          <Budget items={items} overallBudget={overallBudget} />
        </div>
      </div>

      <div className='bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 max-[500px]:px-6'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3'>
          <h1 className='text-[2rem] tracking-wide uppercase font-bold bg-gradient-to-br from-indigo-500 to-blue-600 bg-clip-text text-transparent max-[890px]:text-[1.5rem] max-[420px]:text-[1.1rem] max-[420px]:pt-2'>
            LIST OF ITEMS
          </h1>

          <div className='flex items-center gap-2 sm:gap-3 w-full sm:w-auto'>
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all max-[420px]:py-2 max-[420px]:text-[0.8rem] ${
                showFilterPanel
                  ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {showFilterPanel ? (
                <IoClose className='w-4 h-4 sm:w-5 sm:h-5' />
              ) : (
                <FiFilter className='w-4 h-4 sm:w-5 sm:h-5' />
              )}
              <span className='hidden xs:inline'>Filter & Sort</span>
            </button>

            <button
              onClick={() => setItems([])}
              className='flex-1 sm:flex-initial px-5  py-3  bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg font-medium text-sm transition-colors border border-red-100 whitespace-nowrap max-[420px]:py-2 max-[420px]:text-[0.8rem] '
            >
              CLEAR ALL
            </button>
          </div>
        </div>

        {showFilterPanel && (
          <div className='p-4 sm:p-6 mb-3 max-[420px]:mb-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-200 animate-fadeIn shadow-sm'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
              <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                  Filter by Category
                </label>
                <select
                  onChange={e => setFilterCategory(e.target.value)}
                  className='w-full p-3 bg-white/95 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition-all text-sm sm:text-base shadow-sm'
                  value={filterCategory}
                >
                  <option value='ALL'>All Categories</option>
                  <option value='CONDIMENTS'>Condiments</option>
                  <option value='SNACKS'>Snacks</option>
                  <option value='BEVERAGES'>Beverages</option>
                  <option value='CANNED GOODS'>Canned Goods</option>
                  <option value='DAIRY PRODUCTS'>Dairy Products</option>
                  <option value='MEAT & SEAFOOD'>Meat & Seafood</option>
                  <option value='BAKERY'>Bakery</option>
                  <option value='PRODUCE PRODUCTS'>Produce Products</option>
                  <option value='COOKING ESSENTIALS'>Cooking Essentials</option>
                  <option value='SWEETS'>Sweets</option>
                  <option value='FROZEN FOODS'>Frozen Foods</option>
                  <option value='TOILETRIES'>Toiletries</option>
                  <option value='CLEANING SUPPLIES'>Cleaning Supplies</option>
                  <option value='OTHERS'>Others</option>
                </select>
              </div>

              <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                  Sort Items
                </label>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
                  <select
                    onChange={e => setSortBy(e.target.value)}
                    value={sortBy}
                    className='flex-1 p-3 bg-white/95 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition-all text-sm sm:text-base shadow-sm'
                  >
                    <option hidden value=''>
                      Select sort option
                    </option>
                    <option value='quantity'>Quantity</option>
                    <option value='cost'>Total Cost</option>
                  </select>

                  {sortBy && (
                    <div className='flex gap-2 sm:gap-3 max-[420px]:mt-1'>
                      <button
                        onClick={() =>
                          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                        }
                        className={`flex-1 px-4 py-3 sm:py-2 flex items-center justify-center gap-2 font-medium rounded-lg border transition-all text-sm max-[420px]:text-[0.8rem] max-[420px]:py-2 shadow-sm ${
                          sortOrder === 'asc'
                            ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {sortOrder === 'asc'
                          ? '↑ Low to High'
                          : '↓ High to Low'}
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('')
                          setSortOrder('asc')
                        }}
                        className='px-4 py-3 sm:py-2 bg-gray-50 text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors whitespace-nowrap text-sm max-[420px]:text-[0.8rem] max-[420px]:py-2 shadow-sm'
                      >
                        Reset
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='flex bg-gray-50/80 rounded-lg p-1 mb-3 w-full sm:w-fit border border-gray-100'>
          {['all', 'pending', 'bought'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-medium capitalize transition-all ${
                activeTab === tab
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='hidden min-[1040px]:grid grid-cols-12 gap-4 mb-4 px-2 text-sm font-medium text-gray-500 border-b border-gray-300 py-3'>
          <div className='col-span-4'>Name</div>
          <div className='col-span-3'>Category</div>
          <div className='col-span-1'>Qty</div>
          <div className='col-span-1'>Price</div>
          <div className='col-span-2'>Cost</div>
          <div className='col-span-1 text-end'>Status</div>
        </div>

        <ItemsList items={filteredItems} setItems={setItems} />
      </div>
    </div>
  )
}

export default Content

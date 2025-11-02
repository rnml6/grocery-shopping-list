import React, { useState } from 'react'

function Budget ({ items, overallBudget }) {
  const validBudget = Number(overallBudget) || 0

  const totalQuantity = items.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  )
  const totalItems = items.length

  const boughtCount = items.filter(item => item.status === 'BOUGHT').length

  const totalCost = items?.reduce((sum, item) => sum + (item.cost || 0), 0)
  const remainingBudget = overallBudget - totalCost

  return (
    <div className='flex flex-col h-full gap-5'>
      <div className='budget-div'>
        <h3 className='budget-h3'>Total Budget</h3>
        <input
          value={`₱${validBudget.toLocaleString()}`}
          readOnly
          className='budget-value'
          type='text'
        />
      </div>

      <div className='budget-div'>
        <h3 className='budget-h3'>Total Cost</h3>
        <input
          value={`₱${totalCost.toLocaleString()}`}
          readOnly
          className='budget-value'
          type='text'
        />
      </div>

      <div
        className={`remaining-budget-div
          ${
            remainingBudget < 0
              ? 'bg-gradient-to-r from-red-500 to-red-700'
              : 'bg-gradient-to-br from-indigo-500 to-blue-600'
          }`}
      >
        <h3 className='budget-h3'>
          {remainingBudget < 0 ? 'Insufficient Budget' : `Remaining Budget`}
        </h3>
        <input
          value={`₱${remainingBudget.toLocaleString()}`}
          readOnly
          className='budget-value'
          type='text'
        />
      </div>

      <div className='flex gap-5'>
        <div className='budget-quantity-div w-2/7'>
          <h3 className='budget-h3 text-center'>Bought Items</h3>
          <input
            value={`${boughtCount.toLocaleString()}`}
            readOnly
            className='budget-quantity budget-value'
            type='text'
          />
        </div>
        <div className='budget-quantity-div w-2/7'>
          <h3 className='budget-h3 text-center'>Total Items</h3>
          <input
            value={`${totalItems.toLocaleString()}`}
            readOnly
            className='budget-quantity budget-value'
            type='text'
          />
        </div>

        <div className='budget-quantity-div w-3/7'>
          <h3 className='budget-h3 text-center'>Total Quantity</h3>
          <input
            value={`${totalQuantity.toLocaleString()}`}
            readOnly
            className='budget-quantity budget-value '
            type='text'
          />
        </div>
      </div>
    </div>
  )
}

export default Budget

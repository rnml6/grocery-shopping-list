import React from 'react'

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
    <div className='flex flex-col h-full gap-4 max-[890px]:gap-3 max-[500px]:mx-4 max-[420px]:mx-0 max-[420px]:gap-2'>
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
        className={`remaining-budget-div ${
          remainingBudget < 0
            ? 'bg-gradient-to-r from-red-500 to-red-700'
            : 'bg-gradient-to-br from-indigo-500 to-blue-600'
        }`}
      >
        <h3 className='budget-h3'>
          {remainingBudget < 0 ? 'Insufficient Budget' : 'Remaining Budget'}
        </h3>
        <input
          value={`₱${remainingBudget.toLocaleString()}`}
          readOnly
          className='budget-value'
          type='text'
        />
      </div>

      <div className='flex gap-3 max-[890px]:gap-2'>
        <div className='budget-quantity-div flex-1'>
          <h3 className='budget-h3 text-center max-[390px]:text-[0.7rem]'>
            <span className='hidden max-[390px]:inline'>Bought</span>
            <span className='max-[390px]:hidden'>Bought</span>
          </h3>
          <input
            value={boughtCount.toLocaleString()}
            readOnly
            className='budget-quantity budget-value'
            type='text'
          />
        </div>

        <div className='budget-quantity-div flex-1'>
          <h3 className='budget-h3 text-center max-[390px]:text-[0.7rem]'>
            Items
          </h3>
          <input
            value={totalItems.toLocaleString()}
            readOnly
            className='budget-quantity budget-value'
            type='text'
          />
        </div>

        <div className='budget-quantity-div flex-1'>
          <h3 className='budget-h3 text-center max-[390px]:text-[0.7rem]'>
            <span className='hidden max-[390px]:inline'>Quantity</span>
            <span className='max-[390px]:hidden'>Quantity</span>
          </h3>
          <input
            value={totalQuantity.toLocaleString()}
            readOnly
            className='budget-quantity budget-value'
            type='text'
          />
        </div>
      </div>
    </div>
  )
}

export default Budget

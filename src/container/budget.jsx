import React, { useState } from 'react';

function Budget({ items }) {
    const [overallBudget, setOverallBudget] = useState(null);
    const totalCost = items?.reduce((sum, item) => sum + (item.cost || 0), 0);
    const remainingBudget = overallBudget - totalCost;

    return (
        <div className='bg-[white] rounded-[17px] flex flex-col justify-center px-12 gap-3 h-full budget_container'>

            <div className='flex justify-between'>
                <h3 className='self-center'>Budget:</h3>
                <input value={overallBudget}
                    onChange={(e) => setOverallBudget(Number(e.target.value) || null)}
                    className='border border-black rounded-[7px] pl-2 p-1 [&::-webkit-inner-spin-button]:appearance-none w-[65%]'
                    placeholder='budget...'
                    type="number"
                />
            </div>

            <div className='flex justify-between'>
                <h3 className='self-center'>Total Cost:</h3>
                <input value={totalCost}
                    readOnly
                    className='pl-2 p-1 [&::-webkit-inner-spin-button]:appearance-none w-[65%]'
                    placeholder='total cost...'
                    type="number"
                />
            </div>

            <div className='relative flex justify-between border-b-2 border-t-2' style={{ borderColor: remainingBudget < 0 ? 'red' : '#99acff', color: remainingBudget < 0 ? 'red' : 'black' }}>
                <h3 className='self-center'> {remainingBudget < 0 ? "Insufficient:" : `Remaining:`}</h3>
                <input value={remainingBudget}
                    readOnly
                    className='pl-2 p-1 [&::-webkit-inner-spin-button]:appearance-none w-[65%]'
                    placeholder='remaining...'
                    type="number"
                />
            </div>
    
        </div>
    );
}

export default Budget;

import React, { useState } from "react";
import Budget from "../container/budget";
import AddItems from "../container/additems";
import ItemsList from "../container/itemsList";

function Content() {
  const [items, setItems] = useState([]);

  return (
    <div className='h-[85vh] w-[90vw] bg-[rgb(255,255,255,0.5)] justify-self-center mt-[-20px] rounded-[30px] flex justify-between p-[40px]'>
      <div className='w-[30%] flex flex-col gap-[20px]'>
        <AddItems items={items} setItems={setItems} />
        <Budget items={items} />
      </div>

      <div className='w-[68%] bg-[white] rounded-[17px] pt-0 overflow-auto hide-scrollbar p-10'>
        <div className="sticky top-0 bg-[white]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl p-4 pt-7 pl-8">List of Items</h1>
            </div>
            <div className="content-center">
              <input className="h-[auto]" type="text" placeholder="haha" />
              <button
                onClick={() => setItems([])}
                className="bg-[red] ml-4 h-[auto] py-1 px-10 text-white rounded-[13px]">CLEAR</button>
            </div>
          </div>

          <div className="grid grid-cols-[28%_21%_12%_12%_15%_7%_5%] w-full h-auto">
            <div className="bg-[#99acff] text-center py-2 rounded-tl-[10px]">Name</div>
            <div className="bg-[#99acff] text-center py-2 ">Category</div>
            <div className="bg-[#99acff] py-2">Quantity</div>
            <div className="bg-[#99acff] py-2">Price</div>
            <div className="bg-[#99acff] py-2">Cost</div>
            <div className="bg-[#99acff] text-center py-2">Status</div>
            <div className="bg-[#99acff] rounded-tr-[10px]"></div>
          </div>
        </div>

        <ItemsList items={items} setItems={setItems} />

      </div>

    </div>
  );
}

export default Content;

import React, { useState } from "react";
import Budget from "../container/budget";
import AddItems from "../container/additems";
import ItemsList from "../container/itemsList";

function Content() {
  const [items, setItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

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
              <h1 className="text-4xl py-7 tracking-widest pl-8 text-4xl text-[#5682B1]">LIST OF ITEMS</h1>
            </div>
            <div className="content-center">
              <label className="text-xs mr-2 tracking-widest text-[#5682B1] font-semibold">FILTER BY:</label>
              <select onChange={(e) => setFilterCategory(e.target.value)}
                className='border-1 border-[#5682B1] text-[#5682B1] rounded-[7px] pl-1 p-1 text-sm mr-1 tracking-widest'>
                <option selected value="ALL">All</option>
                <option value="CONDIMENTS">Condiments</option>
                <option value="BEVERAGES">Beverages</option>
                <option value="SNACKS">Snacks</option>
                <option value="OTHERS">Others</option>
              </select>
              <button onClick={() => setItems([])}
                className="bg-[red] ml-4 h-[auto] py-1 px-10 tracking-widest text-white rounded-[13px]">CLEAR</button>
            </div>
          </div>

          <div className="grid grid-cols-[29%_20%_12%_12%_15%_7%_5%] w-full h-auto">
            <div className="bg-[#99acff] pl-4 py-3 rounded-tl-[10px] text-xs tracking-widest font-medium">NAME</div>
            <div className="bg-[#99acff] py-3 text-xs tracking-widest font-medium">CATEGORY</div>
            <div className="bg-[#99acff] py-3 text-xs tracking-widest font-medium">QUANTITY</div>
            <div className="bg-[#99acff] py-3 text-xs tracking-widest font-medium">PRICE</div>
            <div className="bg-[#99acff] py-3 text-xs tracking-widest font-medium">COST</div>
            <div className="bg-[#99acff] text-center py-3 text-xs tracking-widest font-medium">STATUS</div>
            <div className="bg-[#99acff] rounded-tr-[10px]"></div>
          </div>
        </div>

        <ItemsList filterCategory={filterCategory} items={items} setItems={setItems} />

      </div>

    </div>
  );
}

export default Content;

import React, { useState } from 'react'
import '../SelectDrop/Select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
export default function Select({data,placeholder}) {
    const [openselect, setopenselect] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [selectedItem, setselectedItem] = useState(placeholder)
    const openSelect = () => {
        setopenselect(!openselect);
    }
    const closeSelect = (index, name) => {
        // setopenselect(false)
        setselectedIndex(index);
        setselectedItem(name);
    }
    const [listData,setlistData]=useState(data);
    const [listData2]=useState(data);
    const filterList=(e)=>{
        const keyword=e.target.value.toLowerCase();
        // console.log(keyword);
        const list=listData2.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })
        const list2=list.filter((item,index)=>
            list.indexOf(item)===index);
        // console.log(list);
        setlistData(list2);
    }
    return (
        <ClickAwayListener onClickAway={() => { setopenselect(false) }}>
            <div className="selectdrop">
                <span className='openselect' onClick={openSelect}>{selectedItem.length>14 ? selectedItem.substr(0,14)+'..':selectedItem}<div className='dropIcon'><KeyboardArrowDownIcon /></div></span>
                {
                    openselect === true &&
                    <div className='selectDrop'>
                        <div className="Search">
                            <div className="box-1">
                                <input type="text" placeholder='Search here..' onChange={filterList}/>
                            </div>
                            <div className="box-2">
                                <div className='listItems'>
                                <li onClick={()=>{closeSelect(0,placeholder)}} className={`${selectedIndex===0 ?'active':''}`}>{placeholder}</li>
                                    {
                                        listData.map((item, index) => {
                                            return (
                                                <li onClick={()=>{closeSelect(index+1,item)}} className={`${selectedIndex===index+1 ?'active':''}`}>{item}</li>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </ClickAwayListener>
    )
}
// eslint-disable-next-line
// {/* <li onClick={()=>{closeSelect(0,'All Categories')}} className={`${selectedIndex===0 ? 'active': ''}`}>All Categories</li>
// <li onClick={()=>{closeSelect(1,'Milk and Diaries')}} className={`${selectedIndex===1 ? 'active': ''}`}>Milk Diaries</li>
// <li onClick={()=>{closeSelect(2,'Clothing and Beauty')}} className={`${selectedIndex===2 ? 'active': ''}`}>and Beauty</li>
// <li onClick={()=>{closeSelect(3,'Pet Food & Toy')}} className={`${selectedIndex===3 ? 'active': ''}`}>Pet Food Toy</li>
// <li onClick={()=>{closeSelect(4,'Baking Material')}} className={`${selectedIndex===4 ? 'active': ''}`}>Material</li>
// <li onClick={()=>{closeSelect(5,'Fresh Fruit')}} className={`${selectedIndex===5 ? 'active': ''}`}>Fresh Fruit</li>
// <li onClick={()=>{closeSelect(6,'Wines and Drinks')}} className={`${selectedIndex===6 ? 'active': ''}`}>Wines Drinks</li>
// <li onClick={()=>{closeSelect(7,'Fresh seafood')}} className={`${selectedIndex===7 ? 'active': ''}`}>Fresh seafoodli>
// <li onClick={()=>{closeSelect(8,'Fast Food')}} className={`${selectedIndex===8 ? 'active': ''}`}>Fast Food</li>
// <li onClick={()=>{closeSelect(9,'Vegetables')}} className={`${selectedIndex===9 ? 'active': ''}`}>Vegetables</li>
// <li onClick={()=>{closeSelect(10,'Bread and Juice')}} className={`${selectedIndex===10 ? 'active': ''}`}>Bread Juice</li>
// <li onClick={()=>{closeSelect(11,'Noodles')}} className={`${selectedIndex===11 ? 'active': ''}`}>Noodles</li>
// <li onClick={()=>{closeSelect(12,'Icecream')}} className={`${selectedIndex===12 ? 'active': ''}`}>Icecream</li> */}
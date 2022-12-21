import React, { useEffect, useState } from 'react';
import "./style.css";


const getLocalData = () => {
    const myItems = localStorage.getItem("mytodolist");

    if (myItems) {
        return JSON.parse(myItems);
    } else {
        return [];
    }
}

const ToDo = () => {

const [inputData, setInputData] = useState("");
const [items, setItems] = useState(getLocalData);
const [isEditItem, setIsEditItem] = useState("");
const [toggleButton, setToggleButton] = useState(false);

const addItem = () => {
    if (!inputData) {
        alert("Please add some data.");
    }else if(inputData && toggleButton) {
        setItems(
            items.map((cElement)=>{
                if (cElement.id === isEditItem) {
                    return {...cElement, name: inputData};
                }
                return cElement;
            })
        );

        setInputData("");
        setIsEditItem(null);
        setToggleButton(false);
    }else {
     
     const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData
     }
     
     setItems([...items, myNewInputData]);
     setInputData("");
    }
}

const deleteItem = (index) => {
    const updatedItems = items.filter((cElement)=>{
        return cElement.id !== index;
    });

    setItems(updatedItems);
}

//Edit individual item.
const editItem = (index)=>{
    const item_edited = items.find((cElement)=>{
        return cElement.id === index;
    });

    setInputData(item_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
}

//Removes all items from todo list.
const removeAll = () => {
    setItems([]);
}

//For local storage.
useEffect(() => {
localStorage.setItem("mytodolist", JSON.stringify(items));
}, [items]);


  return (
    
    <>
    
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add your items here ✌</figcaption>
                </figure>

                <div className='addItems'>
                    <input type="text"
                    placeholder='📝Add Item'
                    className='form-control'
                    value={inputData}
                    onChange={(e)=>{setInputData(e.target.value)}}
                    />
                    
                    {toggleButton ? <i className="fa fa-edit add-btn" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>}
                    
                </div>    
                

                {/* Show all items. */}
                <div className="showItems">
                    {items.map((cElement)=>{
                        return(
                        <div className="eachItem" key={cElement.id}>
                            <h3>{cElement.name}</h3>
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn"
                                onClick={()=>{
                                    editItem(cElement.id)
                                }}
                                ></i>
                                <i className="far fa-trash-alt add-btn"
                                onClick={()=>{
                                    deleteItem(cElement.id)
                                }}
                                ></i>
                            </div>
                        </div>
                        )
                    })}
                </div>
                    

                {/* Remove all items in checklist. */}
                <div className="showItems">
                    <button className="btn effect04"
                    data-sm-link-text="Remove All"
                    onClick={removeAll}>
                        <span>Check List</span>
                    </button>
                </div>
            

            </div>

        </div>
    
    
    
    </>

  )
}

export default ToDo
import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>

        <nav className='navbar'>
            <div className='btn-group'>

               {
                menuList.map(
                    (cElement)=>{
                        return (
                            <button className="btn-group__item"
                            onClick={()=>filterItem(cElement)}>{cElement}</button>
                        )
                    }
                )
               } 
               
            </div>
        </nav>

    </>
  )
}

export default Navbar
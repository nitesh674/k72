import React, { createContext, useState } from 'react'

 export const NavbarContext  = createContext();
function NavContext({children}) {
    const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <div>
        <NavbarContext.Provider value={{ isNavOpen, setisNavOpen }}>
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext

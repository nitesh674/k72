import React, { createContext, useState } from 'react'

function NavContext({children}) {
    const NavbarContext  = createContext();
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
        <NavbarContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext

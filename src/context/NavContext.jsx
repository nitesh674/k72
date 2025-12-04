import React, { createContext, useState } from 'react'

 export const NavbarContext  = createContext();
function NavContext({children}) {
    const [navOpen, setNavOpen] = useState(false);

    console.log("NavContext Rendered");

  return (
    <div>
        <NavbarContext.Provider value={[ navOpen, setNavOpen ]}>
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext

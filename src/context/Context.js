import React, { Children, useEffect, useState } from "react"

export const ContextData = React.createContext();
function Context({ children }) {
  return (
    <ContextData.Provider value={{
    }}>
      {children}
    </ContextData.Provider>
  )
}

export default Context
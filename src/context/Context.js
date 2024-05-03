import axios from "axios";
import Swal from "sweetalert2";
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
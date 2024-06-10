import React, { useState } from "react";
import { createContext } from "react";


export const modalData = createContext(null);

function context({children}) {
    const [modal, setModal] = useState();


    return(
    
    )
}

export default function context() {
  return <div>context</div>;
}

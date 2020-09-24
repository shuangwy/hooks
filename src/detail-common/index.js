
import React from "react";

const DetailCommon=({children,onclick,title})=>{
    return (
         <div>
          <div className='common-head'>
              head
              <span onClick={(event)=>{
                  event.stopPropagation();
                  event.preventDefault();
                  onclick(title)
              }}>ONCLICK</span>
          </div>
          {children}
         </div>
      );
}
DetailCommon.defaultProps={
    
}
export default DetailCommon;

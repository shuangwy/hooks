import React,{useState,useEffect} from "react";
import "./App.css";
import Split from "react-split";


const SplitCommon=({children,direction,cursor,className,unKey})=>{

const [size,setSize]=useState([50,50])
    const onDrag=(size)=>{
        localStorage.setItem(unKey, JSON.stringify(size))
        setSize(size)
    }
    useEffect(()=>{
        let sizes = localStorage.getItem(unKey)
        if (sizes) {
            sizes = JSON.parse(sizes)
        }else{
            sizes=[50,50]
        }
        setSize(sizes)
    }, [unKey])
   
    return (
        <Split
          sizes={size}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction={direction}
          cursor={cursor}
          className={className}
          onDrag={onDrag}
        >
         {children}
        </Split>
    );
   
}
SplitCommon.defaultProps={
    direction:"vertical",
    cursor:"row-resize",
    className:'split-common-detail',
}

export default SplitCommon;

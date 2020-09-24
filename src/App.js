import React,{useState} from "react";
import "./App.css";
import SplitCommon from './split-common'
import DetailCommon from './detail-common/index'
import AnPage from './page/a'
import BnPage from './page/b'
import CnPage from './page/c'
import DnPage from './page/d'

const App=()=>{
    const [panel,setPanel]=useState('none')
    const ComponentA = () => {
          
          return (<SplitCommon unKey='component-a'>
          <DetailCommon onclick={onclick} title='AnPage'><AnPage/></DetailCommon>
          <DetailCommon onclick={onclick} title='BnPage'><BnPage/></DetailCommon>
      </SplitCommon>)
      };
      
      const ComponentB = () => {
          return (<SplitCommon unKey='component-b'>
                <DetailCommon onclick={onclick} title='CnPage'><CnPage/></DetailCommon>
                <DetailCommon onclick={onclick} title='DnPage'><DnPage/></DetailCommon>
        </SplitCommon>)
        };
    const onclick=(panel)=>{
        // setPanel(panel)
    }
    // setInterval(()=>{
    //     setPanel(1)
    // })
    return  <div>
    <SplitCommon
      direction="horizontal"
      cursor="col-resize"
      className='split-common'
      panel={panel}
      unKey='component-common'
    >
      <ComponentA />
      <ComponentB />
    </SplitCommon>
  </div>
}

export default App;

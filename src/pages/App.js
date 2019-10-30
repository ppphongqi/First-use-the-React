import React from 'react';
import { view as TopMenu } from '../component/TopMenu';

const App = ({children}) =>{
    return (
        <div>
            <TopMenu >{children}</TopMenu>
            <div>{children}</div>
            
        </div>
    )
}

export default App;
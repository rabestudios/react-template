import React from "react";
import { BrowserRouter } from 'react-router-dom';

const AppProvider: React.FC = ({children}) => (
    <BrowserRouter>
        {children}
    </BrowserRouter>
)

export default AppProvider;

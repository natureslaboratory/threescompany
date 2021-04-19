import "@natureslaboratory/responsive-nav";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


const Base = () => {
    return <App />;
}

ReactDOM.render(<Base />, document.getElementById("companyList"));
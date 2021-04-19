import "@natureslaboratory/responsive-nav";
import React from 'react';
import ReactDOM from 'react-dom';
import FullList from "./components/FullList";
import IconList from "./components/IconList";


const CollaboratorList = () => {
    return <FullList />;
}

const CollaboratorIconList = () => {
    return <IconList />
}

let companyList = document.getElementById("companyList");
if (companyList) {
    ReactDOM.render(<CollaboratorList />, companyList);
}

let iconList = document.getElementById("companyIconList");
if (iconList) {
    ReactDOM.render(<CollaboratorIconList />, document.getElementById("companyIconList"));
}


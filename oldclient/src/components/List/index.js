import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
//passing the props object in as an argument. This case the props object gets destructed into the
//actual name of the attributes from FormSearchOpportunity.js-> <list> 
export function ListItem({ 
  key,  
  title,
  zip,
  date,
  notes,
  time 

 }) {  
   //below are the actual attributes from <List> tag to be display as values that were stored in the attributes
  return <li className="list-group-item" data-id={key}>{" title: "  + title } <br/> {"zip: "+  zip}  <br/> {"date: "+ date} <br/>{"notes: "+notes} <br/>{"time: "+time }</li>;
}
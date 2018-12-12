import React from "react";

const Suggestions = (props) => {
  //need to make onclick property of name which displays lineage
 //map over array props.results and render each object's NAME property as suggestion
 //by name
  if (Array.isArray(props.results.results)) {
     const items = props.results.results.map(x => (
      <ul key={x.name}>
        <a key={x.id} id={x.id} href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${x.id}`} target="_blank" onClick={props.handleClick}>
           {x.name}
        </a>
      </ul>
     )
     )
  return <ul>{items}</ul>
  }
  //by Id returns an object, so just return the name property
  else {
  return <ul>
    <a onClick={props.handleClick} id={props.results.id} href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${props.results.id}`} target="_blank">{props.results.name}</a>
    </ul>
  }
}

export default Suggestions
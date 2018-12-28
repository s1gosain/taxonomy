import React from "react";

const Lineage = ({ lineage, results }) => {
  //map over and create a tags using ID
  const links = lineage.map(x => (
      <a key={x + "s"} href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${results.id}`} target="_blank">{x}</a>
  ));
  console.log('lineage links', links);
  return <ul>
    {links}
    </ul>
}

export default Lineage;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Artworks() {

  useEffect(() => {
    fetchData();
  },[]);

  const [artworks, setData] = useState([]); 

  const fetchData = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=20')

    const artworks = await data.json()
    console.log(artworks.data);
    setData(artworks.data);
  }

  return (
    
    <div className="breh">
      <h2 id="learnmore">Browse our collection:</h2>
      {artworks.map(data => (
        <h2 className="artworks" key={data.id}><em>
          <Link to={`artworks/${data.id}`}>{data.title}</Link>
          </em>
          </h2>
      ))}
    </div>
  );
}

export default Artworks;
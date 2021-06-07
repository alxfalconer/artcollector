import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Artworks() {

  useEffect(() => {
    fetchData();
  },[]);

  const [artworks, setData] = useState([]); 

  const fetchData = async () => {
    const data = await fetch('https://api.artic.edu/api/v1/artworks?limit=50')

    const artworks = await data.json()
    console.log(artworks.data);
    setData(artworks.data);
  }

  return (
    
    <div>
      <h1>Our Artworks:</h1>
      <h2 id="learnmore">Click the pieces you'd like to learn more about.</h2>
      {artworks.map(data => (
        <h2 className="artworks" key={data.id}><em>
          <Link to={`artworks/${data.id}`}>
          <img id="image" src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt=""/>
          </Link>
          </em>
          </h2>
      ))}
    </div>
  );
}

export default Artworks;
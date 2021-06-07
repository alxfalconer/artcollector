import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Detail({ match }) {
    useEffect(() => {
      fetchData();
      console.log(match);
  },[]);

  const [data, setData] = useState({
    data: {},
  });

  const fetchData = async () => {
      const fetchData = await fetch(
          `https://api.artic.edu/api/v1/artworks/${match.params.id}`
          );
      const data = await fetchData.json();
      setData(data);
      console.log(data);
  };

  return (
    <div>
        <u>
        <h1 id="title">{data.data.title}</h1>
        </u>
        <h2 id="artist">{data.data.artist_title}</h2>
        <h3 id="origin">{data.data.place_of_origin}, {data.data.date_display}</h3>
        <h4 id="materials">{data.data.medium_display}</h4>
        <img id="image" src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`} alt=""/> 
        <p></p>
        <Link to="/collection">Add to Collection</Link>
        <p></p>

    </div>
  );
}

export default Detail;
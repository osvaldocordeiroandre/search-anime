import React, { useEffect, useState } from 'react'

import Search from './component/searchinput'

export default function App() {

  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {

    if(text) {

      setInfo({});

      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
        .then((response) => response.json())
          .then((response) => {
            setInfo(response);
          });

    };

  }, [text]);

  return (
    <div className='app'>

      <h1> Search Anime </h1>
      <Search value={text} onChange={(search) => setText(search)} />

      {text && !info.data &&(
        <span> Carregando... </span>
      )}

      {info.data && (

        <ul className='anime-list'>

          {info.data.map((anime) => {

            return <li key={anime.id}>
                      <img src={anime.attributes.posterImage.small} alt="Imagem do anime" />
                      {anime.attributes.canonicalTitle} 
                  </li>

          })}

        </ul>

      )}
      
    </div>
  )
}

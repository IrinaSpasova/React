import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  //const [page, setPage] = useState(1); 3:59 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23120900#overview
  // Bug fix 01: const [page, setPage] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [newImages, setNewImages] = useState(false);
  const mounted = useRef(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      //setPhotos(data); 05:7 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23120916#overview
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setNewImages(false);
      setLoading(false);
      // console.log(error);
    }
  }

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
   // console.log('second');
   if(!newImages) return;
   if(loading) return;
   setPage((oldPage)=> oldPage+1)
  }, [newImages])


  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      setNewImages(true);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', event);
    return ()=>window.removeEventListener('scroll', event);
  }, [])


  // Bug fix 01:
  // useEffect(() => {
  //   const event = window.addEventListener('scroll', () => {
  //     // console.log(`innerHight ${window.innerHeight}`);
  //     // console.log(`scrollY ${window.scrollY}`);
  //     // console.log(`body Height ${document.body.scrollHeight}`);
  //     if (!loading && (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 50)) {
  //       //console.log('work');   important for timing of loading next portion of images.9:47 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23120914#overview
  //       setPage((oldPage) => {
  //         return oldPage + 1;
  //       })
  //     }
  //   });
  //   return () => window.removeEventListener('scroll', event)
  //   // eslint-disable-next-line
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('mrun');
    // Bug fix 01  setPage(1);
    if (!query) return;

    if (page === 1) {
      fetchImages();
      return;
    }
    setPage(1);
    //fetchImages();
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder='search'
            className='form-input' value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            //console.log(image);
            return <Photo key={image.id} {...image} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App

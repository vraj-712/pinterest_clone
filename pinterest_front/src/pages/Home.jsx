import React, {useEffect, useRef, useState} from 'react'
import SinglePhoto from '../components/SinglePhoto';

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
    useEffect(() => {
          fetch(`https://api.unsplash.com/photos/?client_id=e6Uz5VlAhjF62cPjpMFM8Q70gLDidculISmcyQffTeo&page=${page}&per_page=${perPage}`)
          .then((res)=> res.json())
          .then((res)=> setData(res))
    }, []);
    const addPhotos = () => {
      setPage(page+1);
      fetch(`https://api.unsplash.com/photos/?client_id=e6Uz5VlAhjF62cPjpMFM8Q70gLDidculISmcyQffTeo&page=${page}&per_page=${perPage}`)
      .then((res)=> res.json())
      .then((res)=> setData([...data, ...res]))
    }

  function showOption(event){
    let option = event.currentTarget.children[1]
    if(option.classList.contains('hidden')){
      option.classList.remove('hidden')
    }else{
      option.classList.add('hidden')
    }
  }
  return (
    <>
    <div onScroll={() => {console.log('Hello');}} className="check columns-1 xs:columns-1 sm:columns-2 md:columns-4 lg:columns-6 [&>div:not(:first-child)]:mt-6 p-7 mt-16 w-full h-5/6">
      {/* <SinglePhoto 
        showOption = {showOption}
        src = 'https://i.pinimg.com/236x/e8/aa/b0/e8aab0a8a3cfc9fab339a4b288b872c3.jpg'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/bYuI23mnmDQ'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/Nllx4R-2c3o'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/lp40q07DIe0'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/wfalq01jJuU'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/wfalq01jJuU'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/rMHNK_skwwU'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/WBMjuGpbrCQ'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/nCUZ5BYBL_o'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/3u4fzMQZhjc'
      />
        <SinglePhoto 
          showOption = {showOption}
          src = 'https://source.unsplash.com/3UrYD7NNVxk'
        />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/haOIqIPSwps'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/fm1JKDItlVM'
      />
      <SinglePhoto 
          showOption = {showOption}
          src = 'https://source.unsplash.com/xRyL63AwZFE'
        />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/qPpq1EVs8vw'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/XeNKWTiCPNw'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/DFt3T5r_4FE'
      />
      <SinglePhoto 
        showOption = {showOption}
        src = 'https://source.unsplash.com/Ebwp2-6BG8E'
      />*/}
        {data.map((singleData) => (
          <>
          <SinglePhoto 
          key = {singleData.slug + singleData.id}
          showOption = {showOption}
          src = {singleData.urls.thumb}
          />
          </>
        ))}
    </div>
</>
  )
};

import React, {useRef, useState} from 'react'
import SinglePhoto from './SinglePhoto';

export default function Home() {
  const ref = useRef(null);
  function showOption(event){
    let option = event.currentTarget.children[1]
    if(option.classList.contains('hidden')){
      option.classList.remove('hidden')
    }else{
      option.classList.add('hidden')
    }
  } 
  const check =() =>{
    if(select){
      console.log("hujblj");
      setselect(!select)
    }
  }
  const [select, setselect] = useState(false);
  return (
    <>
    <div className="columns-1 xs:columns-1 sm:columns-2 md:columns-4 lg:columns-6 [&>div:not(:first-child)]:mt-6 p-7">
      <SinglePhoto 
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
      />
    
    </div>
</>
  )
}

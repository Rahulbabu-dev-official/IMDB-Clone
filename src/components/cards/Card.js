import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./Card.css"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Card = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setTimeout(()=>{
        setIsLoading(false)
      },1500)
   
    }, [])
    

  return (
    <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration ={2} />

            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:'white'}}>

            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`} alt="hello motto" />
               
            <div className="cards__overlay">
                <div className="cards_title">{movie?movie.original_title:""}</div>
                <div className="cards_runtime">{movie?movie.release_date:""}
                <span className="card__rating">{movie?movie.vote_average:""}
                <i className='fas fa-star'></i>
                </span>
                </div>

                <div className="card_description">{movie?movie.overview.slice(0,118)+"...":""}</div>
            </div>
            
            </div>
        </Link>
    }
    </>
  )
}

export default Card
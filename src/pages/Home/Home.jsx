import axios from "axios"
import "./Home.css"
import { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"
import MovieList from "../../components/MovieList/MovieList";

const Home=()=>{
    
    const [popularMovies,setPopularMovies]=useState([])
    
    const getPopularData=async()=>{
       let res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
       setPopularMovies(res.data.results)
    //    console.log(res.data.results)
    }

    useEffect(()=>{
        getPopularData()
    },[])
    return (
        <>
            <Carousel 
                showThumbs={false}
                autoPlay={true}
                transitionTime={1}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map((movie)=>
                        <div key={movie.id}>
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}  alt=""/> 
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                           <AiFillStar/>{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        </div>
                    )
                }
                
            </Carousel>
            <MovieList/>
        </>
    )

}
export default Home
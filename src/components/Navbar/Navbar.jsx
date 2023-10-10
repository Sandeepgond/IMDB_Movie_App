import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaUserAlt } from 'react-icons/fa';

const Navbar=()=>{
    return(<>
            <div className="nav">
                <div className="left-part">
                    <Link to="/"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png" alt="" /> </Link>
                    <Link to="/movies/popular"><span>Popular</span></Link>
                    <Link to="/movies/top_rated"><span> Top Rated</span></Link>
                    <Link to="/movies/upcoming"><span>Upcoming</span></Link>
                </div>
                <div className="right_part"><FaUserAlt/></div>
            </div>
    </>)
}

export default Navbar
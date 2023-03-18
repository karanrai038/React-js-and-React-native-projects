import React from "react";
import { Link } from "react-router-dom";

const LowerNav=()=>{
    return (
        <div className='row bg-light m-4 text-dark'> 
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/"><Link to="/Web"> Web Development</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/"><Link to="/AppDev"> App development</Link></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/"><Link to='/Comp'>Competitive Programming</Link></a>
  </li>
  
</ul>

</div>
    )
}
export default LowerNav;
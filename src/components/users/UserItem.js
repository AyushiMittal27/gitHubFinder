import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem=({users : {login , avatar_url , html_url}})=>{
        return(
            <div className="card text-center" style={{border: '1px solid grey'}}>  
             <img src={avatar_url} alt=" "  className="card-image-top round-img" style={{width:'80px'}} />
             <h3> {login}</h3>
             <div className="card-body">
                 
                 <button class="btn btn-dark">
                     <Link to={`/user/${login}`} > More </Link>
                 </button>
                 
             </div>
            </div>
        )
}

UserItem.propTypes= {
   user : PropTypes.object.isRequired,

}

export default UserItem

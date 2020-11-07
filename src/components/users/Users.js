import React, { useContext }  from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GitHubContext from '../../context/github/gitHubContext'

const Users =()=>{

    const githubContext = useContext(GitHubContext)
    const {loading , users} = githubContext
    return(
        <>
        {loading ? <Spinner /> : null}
        <div  style={userStyle}>
            {users.map((user, i)=>(
             <UserItem key={i}  users={user} />
             ))}
        </div>
        </>
    )
}



const userStyle ={
    display : 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap : '1rem', 
}


export default Users
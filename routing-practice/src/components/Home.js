import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useLocation,useParams } from 'react-router-dom';
import {context} from './AddContact';

export const Home = () => {
    const arr=useContext(context)
  return (
    <div>
        <h1>This is Home Component</h1>
        <Link to="/add"><button>Add To Contact</button></Link>
        <br/><br/>
        
    </div>
  )
}



export function About(){
   return(
    <div>
        <h1>This is About Component</h1>
    </div>
   )
}

export function Contact(){
    return(
        <div>
            <h1>This is Contact Component</h1>
        </div>
    )
}

export function Users(){
    return(
        <div>
            <Link to="orders"><button>Orders</button></Link>
            <Link to="profile"><button>Profile</button></Link>
            <h1>This is Users Component</h1>
            <Outlet/>
        </div>
    )
}

export function Names(){
    const params=useParams();
    const queryparams=useLocation();
       let queryParams= new URLSearchParams(queryparams.search);
       let posts=queryParams.get('posts');
       let category=queryParams.get('category');
    console.log(params)
    return(
        <div>
            <h1>Hello Names component</h1>
            <h3>Hello {params.name} your id is {params.id}</h3>
            <h3>your posts are:{posts}</h3>
            <h3>your category is:{category} </h3>
        </div>
    )
}

export function Orders(){
    return(
        <div>
            <h1>This is Orders Component</h1>
        </div>
    )
}

export function Profile(){
    return(
        <h1>This is Profile Component</h1>
    )
}
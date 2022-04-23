import React from 'react'
import {Link} from 'react-router-dom';
function HomePage() {
    
  return (
    <>
        <h1>Home Page</h1>
        <div><Link to='/example'>Example</Link></div>
        <div><Link to='/fetch'>Fetch</Link></div>
    </>
    
  )
}

export default HomePage
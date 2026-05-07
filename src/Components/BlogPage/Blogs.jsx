import React from 'react'
import Privacy from '../AboutPage/Privacy'
import BlogSection from './BlogSection'

function Blogs() {
  return (
    <div className='px-2  sm:px-0 '>
      <Privacy colorText="Posts"  first_letter="More"  />
        <BlogSection />
    </div>
  )
}

export default Blogs

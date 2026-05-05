import React from 'react'
import Privacy from '../AboutPage/Privacy'
import BlogSection from './BlogSection'

function Blogs() {
  return (
    <div className='px-2  lg:px-0'>
      <Privacy colorText="More"  first_letter="Posts"  />
        <BlogSection />
    </div>
  )
}

export default Blogs

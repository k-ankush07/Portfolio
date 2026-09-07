// import React from 'react'
// import ProjectTitle from '../Components/WorkPage/ProjectTitle'
// import WorkDetail from '../Components/WorkPage/WorkDetail'

// function WorkDetailPage() {
//   return (
//     <>
//     <div>
//        <WorkDetail />

//     </div>
//     </>
//   )
// }

// export default WorkDetailPage

import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import WorkDetail from '../Components/WorkPage/WorkDetail'
import projectsData from '../data/projectsData'

function WorkDetailPage() {
  const { title } = useParams()
  const project = projectsData[title]

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <>
    <div>
       <WorkDetail project={project} />

    </div>
    </>
  )
}

export default WorkDetailPage
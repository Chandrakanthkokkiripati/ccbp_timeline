// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-bg-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-header-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-icon-container">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="link-item" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

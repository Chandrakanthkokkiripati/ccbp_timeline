// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-bg-container">
      <div className="course-header-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="course-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="course-tag-item">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

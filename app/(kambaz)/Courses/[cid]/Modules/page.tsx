import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButton";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {/* Week 1 - Lecture 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {/* Learning Objectives */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development
              <LessonControlButtons />
            </ListGroupItem>

            {/* Reading */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Full Stack Developer - Chapter 1 - Introduction
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Full Stack Developer - Chapter 2 - Createing User
            </ListGroupItem>

            {/* Slides */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> SLIDES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Introduction to Web Development
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Creating an HTTP server with Node.js
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Creating a React Application
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 1 - Lecture 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 2 - Formatting User Interface with HTML
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {/* Learning Objectives */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development
              <LessonControlButtons />
            </ListGroupItem>

            {/* Reading */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Full Stack Developer - Chapter 1 - Introduction
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Full Stack Developer - Chapter 2 - Createing User
            </ListGroupItem>

            {/* Slides */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> SLIDES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Introduction to Web Development
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Creating an HTTP server with Node.js
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Creating a React Application
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 3 - Lecture 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 3, Lecture 2 - Formatting User Interface with HTML
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {/* Learning Objectives */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development
              <LessonControlButtons />
            </ListGroupItem>

            {/* Reading */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Full Stack Developer - Chapter 1 - Introduction
            </ListGroupItem>
            <ListGroupItem className="wd-content-item p-3 ps-5">
              Full Stack Developer - Chapter 2 - Createing User
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

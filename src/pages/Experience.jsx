import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#B4B4B4">
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date='2003-2007'
        iconStyle={ {background: "#9EC2D3", color: "#fff"} }
        icon={<SchoolIcon />}>
          <h3>Amherst College (Amherst, MA)</h3>
          <p>B.A. Music (Composition)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2007 - 2008"
          iconStyle={{ background: "#D19882", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graduate Fellow in Music - Amherst College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Amherst, MA
          </h4>
          <p>Taught ear training & music theory. Assistant directed Choral Society.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "#D19882", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Advocate - Harlem Children's Zone
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>Managed a caseload of students attending HCZ afterschool.
          Liaised with school stakeholders, families, devised/implemented after school tutoring
          programs, managed after school media extra curricular schedules.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date='2011-2013'
        iconStyle={ {background: "#9EC2D3", color: "#fff"} }
        icon={<SchoolIcon />}>
          <h3>LIU-Brooklyn (Brooklyn, NY)</h3>
          <p>M.S., Special Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - 2022"
          iconStyle={{ background: "#D19882", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            HS Special Education Teacher - NYC Department of Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>Managed caseload of 20-30 students with disabilities (SWD). Maintained
            IEP services for SWD, ran annual reviews, liaised with families,
            planned & implemented after school enrichment. Co-Taught mixed abilities Algebra 1/2,
           Geometry, Precalculus, Physics, Chemistry; Founded SMSHS Computer Science Department,
           taught AP CS A (Java), Intro to Programming (Python), Data Science Independent Study
           (Numpy, Pandas).</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#D19882", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Instructional Fellow - Giant Machines
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>Taught 2-5 week bootcamps in HTML, CSS, JS, Github, MongoDB, Python, & Flask. Built community, ran gamified
          learning experience, assisted in planning, developing, debugging capstone web applications.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date='Oct 2022 - Dec 2022'
        iconStyle={ {background: "#9EC2D3", color: "#fff"} }
        icon={<SchoolIcon />}>
          <h3>Le Wagon (Remote)</h3>
          <p>Certificate of Completion, Full Stack Web Development</p>
          <p>Skills: Ruby, Rails, MySQL, PostgreSQL, HTML, CSS, JS, StimulusJS</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;

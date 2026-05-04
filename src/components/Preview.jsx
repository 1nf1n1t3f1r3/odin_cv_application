// src/components/Preview.jsx

function Preview({ general, education, experience }) {
  return (
    <div id="cv-preview" className="preview">
      <h2>CV Preview</h2>

      {/* GENERAL INFO */}
      <section>
        <h3>General Information</h3>
        <p>
          <strong>Name:</strong> {general.name}
        </p>
        <p>
          <strong>Email:</strong> {general.email}
        </p>
        <p>
          <strong>Phone:</strong> {general.phone}
        </p>
      </section>

      {/* EDUCATION */}
      <section>
        <h3>Education</h3>
        <p>
          <strong>School:</strong> {education.school}
        </p>
        <p>
          <strong>Study:</strong> {education.study}
        </p>
        <p>
          <strong>Graduation Date:</strong> {education.date}
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h3>Experience</h3>
        <p>
          <strong>Company:</strong> {experience.company}
        </p>
        <p>
          <strong>Position:</strong> {experience.position}
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <p>{experience.responsibilities}</p>
        <p>
          <strong>Duration:</strong> {experience.startDate} –{" "}
          {experience.endDate}
        </p>
      </section>
    </div>
  );
}

export default Preview;

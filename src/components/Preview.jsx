import "../styles/Preview.css";

function Preview({ general, education, experience }) {
  return (
    <div className="cv-preview" id="cv-preview">
      <h2>{general.name}</h2>
      <p>
        {general.email} | {general.phone}
      </p>

      <hr />

      <h3>Education</h3>
      <p>{education.school}</p>
      <p>{education.study}</p>
      <p>{education.date}</p>

      <hr />

      <h3>Experience</h3>
      <p>{experience.company}</p>
      <p>{experience.position}</p>
      <p>{experience.responsibilities}</p>
      <p>
        {experience.startDate} - {experience.endDate}
      </p>
    </div>
  );
}

export default Preview;

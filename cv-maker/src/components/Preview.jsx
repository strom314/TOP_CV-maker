export function Preview({ generalInfo, school, experience }) {
  return (
    <div>
      <h1>general info</h1>
      <div className="preview-section">
        <p>{generalInfo.firstName + " " + generalInfo.lastName}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </div>

      <h1>education</h1>
      <div className="preview-section">
        <p>{school.school}</p>
        <p>{school.field}</p>
        <p>{school.graduation}</p>
      </div>

      <h1>experience</h1>
      <div className="preview-section">
        <p>{experience.company}</p>
        <p>{experience.position}</p>
        <p>{experience.years}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}

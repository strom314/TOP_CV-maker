export function School({ school, setSchool }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setSchool({ ...school, [name]: value });
  }
  return (
    <div className="input-container">
      <h2>Education</h2>
      <div className="input">
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          value={school.school}
          placeholder="name"
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="field">Field</label>
        <input
          type="text"
          name="field"
          value={school.field}
          placeholder="field"
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="graduation">Graduation date</label>
        <input type="date" name="graduation" onChange={handleChange}></input>
      </div>
    </div>
  );
}

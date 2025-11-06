export function Experience({ experience, setExperience }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  }

  return (
    <div className="input-container">
      <h2>Work experience</h2>
      <label htmlFor="company">company name</label>
      <input
        type="text"
        name="company"
        id="company"
        onChange={handleChange}
        value={experience.company}
      />
      <label htmlFor="position">job position</label>
      <input
        type="text"
        name="position"
        id="position"
        onChange={handleChange}
        value={experience.position}
      />
      <label htmlFor="years">years worked there</label>
      <input
        type="text"
        name="years"
        id="years"
        onChange={handleChange}
        value={experience.years}
      />
      <label htmlFor="desctiption">job description</label>
      <input
        type="text"
        name="desctiption"
        id="desctiption"
        onChange={handleChange}
        value={experience.desctiption}
      />
    </div>
  );
}

export function School({ school, setSchool }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setSchool({ ...school, [name]: value });
  }
  return (
    <div>
      <input
        type="text"
        name="school"
        value={school.school}
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="field"
        value={school.field}
        placeholder="field"
        onChange={handleChange}
      />
      <input type="date" name="graduation" onChange={handleChange}></input>
    </div>
  );
}

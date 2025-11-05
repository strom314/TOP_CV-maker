export function GeneralInfo({ generalInfo, setGeneralInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  }

  return (
    <div>
      <h2>general information</h2>
      <label htmlFor="first-name">first name</label>
      <input
        type="text"
        name="firstName"
        id="first-name"
        onChange={handleChange}
        value={generalInfo.firstName}
      />

      <label htmlFor="last-name">last name</label>
      <input
        type="text"
        name="lastName"
        id="last-name"
        onChange={handleChange}
        value={generalInfo.lastName}
      />

      <label htmlFor="email">email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        value={generalInfo.email}
      />

      <label htmlFor="phone">phone number</label>
      <input
        type="text"
        name="phone"
        id="phone"
        onChange={handleChange}
        value={generalInfo.phone}
      />
    </div>
  );
}

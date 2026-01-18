import { useState } from "react";
import { createClinic } from "../api";

function AddClinic() {
  const [form, setForm] = useState({
    name: "",
    type: "clinic",
    medicines: "",
    location: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createClinic({
      name: form.name,
      type: form.type,
      medicines: form.medicines.split(",").map(m => m.trim()),
      location: form.location,
    });

    alert("Clinic added");
    setForm({ name: "", type: "clinic", medicines: "", location: "" });
  };

  return (
    <div>
      <h3>Add Clinic</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="clinic">Clinic</option>
          <option value="phc">PHC</option>
          <option value="hospital">Hospital</option>
        </select>
        <input name="medicines" placeholder="Medicines" value={form.medicines} onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddClinic;

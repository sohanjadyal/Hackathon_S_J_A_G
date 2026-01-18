import { useState } from "react";
import { createNotice } from "../api";

function AddNotice() {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNotice(form);
    alert("Notice added");
    setForm({ title: "", description: "" });
  };

  return (
    <div>
      <h3>Add Notice</h3>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddNotice;

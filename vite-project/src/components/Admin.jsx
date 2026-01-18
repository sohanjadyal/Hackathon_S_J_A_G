import AddClinic from "./AddClinic";
import AddNotice from "./AddNotice";

function Admin() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddClinic />
      <hr />
      <AddNotice />
    </div>
  );
}

export default Admin;

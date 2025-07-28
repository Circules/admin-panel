
function AddProjectForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      desc: formData.get("desc"),
      image: formData.get("image")
    };

    try {
      const res = await fetch("http://localhost:3000/api/add/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Project added!");
        e.target.reset();
      } else {
        alert("Failed to add project");
      }
    } catch (err) {
      alert("Error sending request");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required /> <br />
      <input name="desc" placeholder="Description" required /> <br />
      <input name="image" placeholder="Image URL" required /> <br />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;

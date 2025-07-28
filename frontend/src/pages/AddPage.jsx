import AddProjectForm from '../components/projectForm.jsx';
import AddEventForm from '../components/eventForm.jsx';
import AddMemberForm from '../components/memberForm.jsx';

const AddPage = () => {
  return (
  <>
    <h1>ADMIN PANEL</h1>
    <h2>Add Project:</h2>
    <AddProjectForm/>
    <h2>Add Event:</h2>
    <AddEventForm/>
    <h2>Add Member:</h2>
    <AddMemberForm/>
    <a href="http://localhost:5173/">Go to Home</a>

  </>
    
  );
}

export default AddPage
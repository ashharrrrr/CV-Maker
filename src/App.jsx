import PersonalDetails from "./components/forms/PersonalDetails.jsx";
import Preview from "./components/Preview/preview.jsx";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen gap-10 flex flex-row items-center justify-center">
      <PersonalDetails />
      <Preview />
    </div>
  );
}

export default App;

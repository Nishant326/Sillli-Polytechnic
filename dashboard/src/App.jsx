import AdminDashboard from "./components/AdminDashboard"
import { Routes, Route, Navigate } from "react-router-dom";
import CreateNotice from "./components/Menu/CreateNotice";
import AdminLayout from "./components/AdminLayout";
import CreateResult from "./components/Menu/CreateResult";
import CreateTopper from "./components/Menu/CreateTopper";
import CreateSyllabus from "./components/Menu/CreateSyllabus";

function App() {

  return (
    <>
     <Routes>
      {/* All admin pages use the same layout */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} /> {/* Default page */}
        <Route path="create-notice" element={<CreateNotice />} />
        <Route path="create-result" element={<CreateResult />} />
        <Route path="create-topper" element={<CreateTopper/>}/>
        <Route path="create-syllabus" element={<CreateSyllabus/>}/>
        
        {/* Redirect any unknown path to dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </>
  )
}
export default App;

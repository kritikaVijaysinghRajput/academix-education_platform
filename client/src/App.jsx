import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import Registration from "./Pages/Registration";
import "./index.css";
import Main from "./Pages/MainPage";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import SubjectsPage from "./Pages/Student/SubjectsPage";
import DashboardTeacher from "./Pages/Teacher/DashboardTeacher";
import { Toaster } from "react-hot-toast";
import TeacherSubjectDashboard from "./Pages/Teacher/TeacherSubjectdashboard";
import CreateQuiz from "./Pages/Teacher/CreateQuiz";
import CreateAssignment from "./Pages/Teacher/CreateAssignment";
import CreateShareResources from "./Pages/Teacher/CreateShareResources";
import ShowSubjectDetails from "./Pages/Student/ShowSubjectDetails";
import ShowstudentAssignments from "./Pages/Student/ShowstudentAssignments";
import ShowTeacherAssignment from "./Pages/Teacher/ShowTeacherAssignment";
import ShowStudentQuiz from "./Pages/Student/ShowStudentQuiz";
import ShowTeacherQuiz from "./Pages/Teacher/ShowTeacherQuiz";
import ShowStudentResources from "./Pages/Student/ShowStudentResources";
import ShowTeacherResources from "./Pages/Teacher/ShowTeacherResources";
import SettingsPage from "./Pages/SettingsPage";
import UpdatePassword from "./Pages/UpdatePassword";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<DashboardTeacher />} />
        <Route path="/subject" element={<SubjectsPage />} />
        <Route path="/teachersubject" element={<TeacherSubjectDashboard />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/createassignment" element={<CreateAssignment />} />
        <Route path="/showsubject" element={<ShowSubjectDetails />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />

        <Route
          path="/createshareresources"
          element={<CreateShareResources />}
        />
        <Route
          path="/showstudentassignments"
          element={<ShowstudentAssignments />}
        />
        <Route
          path="/showteacherassignments"
          element={<ShowTeacherAssignment />}
        />
        <Route path="/showstudentquiz" element={<ShowStudentQuiz />} />
        <Route path="/showTeacherQuiz" element={<ShowTeacherQuiz />} />
        <Route
          path="/showstudentresources"
          element={<ShowStudentResources />}
        />
        <Route
          path="/showteacherresources"
          element={<ShowTeacherResources />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateSubject = ({ onClose }) => {
  const [subjectName, setSubjectName] = useState("");
  const [classroom, setClassroom] = useState("");
  const [teacherName, setTeacherName] = useState("");

  const generateLink = () => {
    const uniqueId = uuidv4();
    return `https://example.com/classroom/${uniqueId}`;
  };

  const handleCreateSubject = () => {
    const link = generateLink();

    // Implement your logic to store the subject details and link
    // You can use state management (e.g., Redux, React Context, etc.) for this

    console.log("Subject Name:", subjectName);
    console.log("Classroom:", classroom);
    console.log("Teacher Name:", teacherName);
    console.log("Generated Link:", link);

    onClose();
  };

  return (
    <div>
      <div className="flex justify-center items-center fixed inset-0 bg-purple-300 bg-opacity-30 backdrop-blur-sm">
        <div className="bg-white rounded-2xl w-96 h-96 shadow p-4 relative">
          <button onClick={onClose} className="absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#7959FD"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div>
            <p className=" font-semibold text-2xl flex justify-center my-4">
              Create Subject
            </p>
            <form className="flex-1 mt-10">
              <input
                type="text"
                placeholder="Subject Name"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="block w-full border border-black rounded-lg p-2 my-5 text-sm"
              />
              <input
                type="text"
                placeholder="Class"
                value={classroom}
                onChange={(e) => setClassroom(e.target.value)}
                className="block w-full border border-black rounded-lg p-2 my-5 text-sm"
              />
              <input
                type="text"
                placeholder="Subject Teacher Name"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                className="block w-full border border-black rounded-lg p-2 my-5 text-sm"
              />
            </form>
            <div className="flex justify-center">
              <button
                onClick={handleCreateSubject}
                className="bg-primary text-white shadow-lg p-3 flex items-center gap-2 rounded-lg hover:bg-purple-400"
              >
                Create Subject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSubject;

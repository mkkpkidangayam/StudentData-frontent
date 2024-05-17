import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

const ShowDataTable = () => {
  const [students, setStudents] = useState([]);
  const [university, setUniversity] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://studentdata-backend.onrender.com/api/get-students"
        );

        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleFilterChange = (e) => {
    setUniversity(e.target.value);
  };

  const filteredStudents =
    university === "all" || university === ""
      ? students
      : students.filter((student) => student.university === university);

  const uniqueUniversities = [
    ...new Set(students.map((student) => student.university)),
  ];

  return (
    <div className="container">
      <div>
        <label>
          Filter by University:
          <select
            name="university"
            id="university"
            onChange={handleFilterChange}
            value={university}
          >
            <option value="all">All</option>
            {uniqueUniversities.map((uni, index) => (
              <option key={index} value={uni}>
                {uni}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>University</th>
            <th>Subjects</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{new Date(student.dob).toLocaleDateString()}</td>
              <td>{student.university}</td>
              <td>{student.subjects.join(", ")}</td>
              <td>{student.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowDataTable;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './form.css'

const AddStudentData = () => {
  const [formData, setFormData] = useState({
    name: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    university: "",
    subjects: [],
    rating: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        subjects: checked
          ? [...prevState.subjects, value]
          : prevState.subjects.filter((subject) => subject !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://studentdata-backend.onrender.com/api/add-student",
        formData
      );
      alert(response.data.message);
      navigate("/students-data-table");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="nameinput"
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="number"
          name="dobDay"
          value={formData.dobDay}
          onChange={handleChange}
          placeholder="Day"
          required
          className="dobDay"
        />
        <input
          type="number"
          name="dobMonth"
          value={formData.dobMonth}
          onChange={handleChange}
          placeholder="Month"
          required
          className="dobMonth"
        />
        <input
          type="number"
          name="dobYear"
          value={formData.dobYear}
          onChange={handleChange}
          placeholder="Year"
          required
          className="dobYear"
        />
      </label>
      <label>
        University:
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Subjects:
        <label>
          <input
            type="checkbox"
            name="subjects"
            value="Math"
            onChange={handleChange}
          />
          Math
        </label>
        <label>
          <input
            type="checkbox"
            name="subjects"
            value="Science"
            onChange={handleChange}
          />
          Science
        </label>
        <label>
          <input
            type="checkbox"
            name="subjects"
            value="History"
            onChange={handleChange}
          />
          History
        </label>
      </label>
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudentData;

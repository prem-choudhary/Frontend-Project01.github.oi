document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("student-form");
  const studentNameInput = document.getElementById("student-name");
  const studentGradeInput = document.getElementById("student-grade");
  const studentListDiv = document.getElementById("student-list");

  const courseForm = document.getElementById("course-form");
  const courseNameInput = document.getElementById("course-name");
  const courseTeacherInput = document.getElementById("course-teacher");
  const courseListDiv = document.getElementById("course-list");

  let students = [];
  let courses = [];

  // Student Management
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = studentNameInput.value;
    const grade = studentGradeInput.value;
    if (name && grade) {
      students.push({ name, grade });
      renderStudents();
      studentNameInput.value = "";
      studentGradeInput.value = "";
    }
  });

  function renderStudents() {
    studentListDiv.innerHTML = "";
    students.forEach((student, index) => {
      const studentItem = document.createElement("div");
      studentItem.classList.add("item");
      studentItem.innerHTML = `
                <span>${student.name} (Grade: ${student.grade})</span>
                <button onclick="deleteStudent(${index})">Delete</button>
            `;
      studentListDiv.appendChild(studentItem);
    });
  }

  window.deleteStudent = (index) => {
    students.splice(index, 1);
    renderStudents();
  };

  // Course Management
  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = courseNameInput.value;
    const teacher = courseTeacherInput.value;
    if (name && teacher) {
      courses.push({ name, teacher });
      renderCourses();
      courseNameInput.value = "";
      courseTeacherInput.value = "";
    }
  });

  function renderCourses() {
    courseListDiv.innerHTML = "";
    courses.forEach((course, index) => {
      const courseItem = document.createElement("div");
      courseItem.classList.add("item");
      courseItem.innerHTML = `
                <span>${course.name} (Teacher: ${course.teacher})</span>
                <button onclick="deleteCourse(${index})">Delete</button>
            `;
      courseListDiv.appendChild(courseItem);
    });
  }

  window.deleteCourse = (index) => {
    courses.splice(index, 1);
    renderCourses();
  };

  // Initial render
  renderStudents();
  renderCourses();
});

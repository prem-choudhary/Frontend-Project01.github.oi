// --------------------------
// Default Students
// --------------------------
let students = JSON.parse(localStorage.getItem("students")) || [
  { name: "Raj", age: 16, class: "10th" },
  { name: "Aman", age: 15, class: "9th" },
  { name: "Priya", age: 17, class: "11th" },
];

// --------------------------
// Save to localStorage
// --------------------------
function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

// --------------------------
// Render Students
// --------------------------
function renderStudents(list = students) {
  const div = document.getElementById("studentsList");
  div.innerHTML = "";

  list.forEach((std) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${std.name}</strong><br>Age: ${std.age}<br>Class: ${std.class}`;
    div.appendChild(card);
  });
}

// --------------------------
// Search Feature
// --------------------------
document.getElementById("searchInput").addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();
  const filtered = students.filter((s) => s.name.toLowerCase().includes(text));
  renderStudents(filtered);
});

// --------------------------
// Sorting Feature
// --------------------------
document.getElementById("sortSelect").addEventListener("change", (e) => {
  const type = e.target.value;

  if (type === "name") {
    students.sort((a, b) => a.name.localeCompare(b.name));
  } else if (type === "age") {
    students.sort((a, b) => a.age - b.age);
  } else if (type === "class") {
    students.sort((a, b) => a.class.localeCompare(b.class));
  }

  saveData();
  renderStudents();
});

// --------------------------
// Dark Mode Toggle
// --------------------------
const darkToggle = document.getElementById("darkToggle");

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
});

// --------------------------
// Initial Render
// --------------------------
renderStudents();

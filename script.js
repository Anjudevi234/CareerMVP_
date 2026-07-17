const data = {
  roadmaps: {
    MPC: "10th → MPC → Engineering → Software Engineer",
    BiPC: "10th → BiPC → MBBS → Doctor",
    Commerce: "10th → Commerce → BCom → Accountant"
  },

  careers: {
    Technology: ["Software Engineer", "AI Engineer", "Data Scientist"],
    Biology: ["Doctor", "Pharmacist", "Nurse"],
    Business: ["Accountant", "Manager", "Entrepreneur"]
  },

  eligibility: {
    BTech: ["JEE", "KEAM", "BITSAT"],
    BCom: ["CA", "CMA", "CS"],
    BA: ["UPSC", "SSC CGL", "Bank Exams"]
  }
};

function getResult() {
  console.log("Button clicked"); // DEBUG

  const stream = document.getElementById("stream").value;
  const interest = document.getElementById("interest").value;
  const degree = document.getElementById("degree").value;

  console.log(stream, interest, degree); // DEBUG

  // Roadmap
  document.getElementById("roadmap").innerText =
    data.roadmaps[stream] || "No roadmap found";

  // Careers
  const careersList = document.getElementById("careers");
  careersList.innerHTML = "";
  (data.careers[interest] || []).forEach(c => {
    const li = document.createElement("li");
    li.innerText = c;
    careersList.appendChild(li);
  });

  // Eligibility
  const eligibilityList = document.getElementById("eligibility");
  eligibilityList.innerHTML = "";
  (data.eligibility[degree] || []).forEach(e => {
    const li = document.createElement("li");
    li.innerText = e;
    eligibilityList.appendChild(li);
  });
}

// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}
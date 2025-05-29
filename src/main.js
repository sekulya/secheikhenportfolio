const projects = [
  {
    title: "AI Age Classifier",
    description: "A deep learning web app that predicts a person's age from an image using a CNN model.",
    link: "https://github.com/sekulya/ageclassfier/tree/main/Desktop/agecam"
  },
  {
    title: "Web3GL Left Renal Mass 3D Model Visualization",
    description: "An interactive 3D visualization website leveraging Web3 and Three.js to render on-chain 3D models.",
    link: "https://github.com/sekulya/left_renalmass-medical-3Dmodel.git"
  },  // Added comma
  {
    title: "Web3GL Neurosurgery 3D Model Visualization",
    description: "An interactive 3D visualization website leveraging Web3 and Three.js to render on-chain 3D models.",
    link: "https://github.com/sekulya/neurosurgery-3dmodel/tree/main/Desktop/neurosurgery"
  },  // Added comma
  {
    title: "bashastudio",
    description: "Ecommerce website for clothing brand",
    link: "https://github.com/sekulya/bashastudio-main"
  }
];  // Fixed array syntax

const projectHTML = projects.map(project => `
  <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
    <h2 class="text-xl font-semibold text-indigo-600 mb-2">${project.title}</h2>
    <p class="text-gray-700 mb-4">${project.description}</p>
    <a href="${project.link}" target="_blank" class="text-sm text-indigo-500 hover:underline">View Project →</a>
  </div>
`).join("");

document.getElementById('root').innerHTML = `
  <h1 class="text-4xl font-bold text-center text-indigo-600">My Portfolio</h1>
  <p class="text-lg mt-2 text-center text-gray-600 mb-10">A showcase of my full-stack projects.</p>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    ${projectHTML}
  </div>
`;
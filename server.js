const fs = require("fs");
const path = require("path");

// Path to the 'public/projects' folder
const projectsDir = path.join(__dirname, "public", "projects");
// Output file: 'public/projects.json'
const outputFile = path.join(__dirname, "public", "projects.json");

fs.readdir(projectsDir, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error("❌ Failed to read projects directory:", err);
    return;
  }

  const directories = files
    .filter((file) => file.isDirectory())
    .map((dir) => dir.name);

  fs.writeFile(outputFile, JSON.stringify(directories, null, 2), (err) => {
    if (err) {
      console.error("❌ Failed to write projects.json:", err);
    } else {
      console.log("✅ Successfully generated projects.json:");
      console.log(directories);
    }
  });
});

fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const list = document.getElementById('project-list');
    projects.forEach(project => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `./projects/${project}/index.html`;
      a.textContent = project;
      a.target = '_blank';
      li.appendChild(a);
      list.appendChild(li);
    });
  });

import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {

  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const handleOnChange = (e) => setSearchQuery(e.target.value);


  const onToggleDarkMode = ()=> setIsDarkMode(!isDarkMode)

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList 
        projects={projects} 
        searchResults={searchResults} 
        handleOnChange={handleOnChange}/>
    </div>
  );
};

export default App;

import ProjectListItem from "./ProjectListItem.js"

const ProjectList = ({projects})=>{
    const projectListItems = projects.map((project)=>{
        return <ProjectListItem key={project.id} {...project} />
    })
    // console.log(projectListItems)
    return(
        <section>
            <h2>Some Projects</h2>
            <ul className="cards">
            {projectListItems}
            </ul>
        </section>
    )
}

export default ProjectList
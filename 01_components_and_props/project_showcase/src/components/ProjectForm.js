
const ProjectForm = ()=>{
    return (
        <section>
            <form className="form">
                <h3>Add Project</h3>
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="project name" />
                <label>description</label>
                <input type="text" id="description" name="description" placeholder="project description"/>
                <button type="submit">Add Project </button>
            </form>
        </section>
    )
}

export default ProjectForm
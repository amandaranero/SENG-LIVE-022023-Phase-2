
const ProjectListItem = ({id,name,about,phase,link,image})=>{
    return (
        <li className="card">
        <figure className="image">
            <img src={image} alt={name}/>
        </figure>
        </li>
    )
}

export default ProjectListItem


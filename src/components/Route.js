


export default function Route({route,icon,onclick}){
    return (
        <button className="route-button" onClick={onclick}>
            <img  src={icon} alt='icon' className='route-icon'/>
            {route}
        </button>
    )
}
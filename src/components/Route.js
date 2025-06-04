


export default function Route({route,icon,onclick,isClicked}){
    
    return (
        <button onClick={onclick} className={`${isClicked && 'route-button-clicked'} route-button`} >
            <img  src={icon} alt='icon' className='route-icon'/>
            <p className="route-text">{route}</p>
        </button>
    )
}

export default function CustomTextInput({type,src,placeholder}){
    return (
        <div className="custom-input">
            <img src={src} className="input-logo"/>
            <input type={type}  className="input" placeholder={placeholder}/>
        </div>
    )
}
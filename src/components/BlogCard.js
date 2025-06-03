

export default function BlogCard({image,title}){
    return (
        <div className="blog-card">
            <img src={image} alt="content" className="blog-image"/>
            <p className="blog-title">{title}</p>
        </div>
    )
}
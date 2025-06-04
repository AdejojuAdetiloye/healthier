

export default function CreateBlog(){
    return (
        <div className="create-blog-div">
            <p className="title-label">Blog Title</p>
            <input type="text" placeholder="Blog title" className="create-blog-title"/>
            <p className="content-label">Content</p>
            <textarea placeholder="Blog content" className="blog-content" />
            <button className="upload-button">Upload Blog</button>
        </div>
    )
}
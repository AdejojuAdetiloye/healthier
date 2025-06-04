export default function AdminBlogCard({ image, title }) {
  return (
    <div className="admin-blog-card-div">
      <div className="admin-blog-card">
        <img src={image} alt="content" className="admin-blog-image" />
        <p className="admin-blog-title">{title}</p>
      </div>
      <div className="admin-actions">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}

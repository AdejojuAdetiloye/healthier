export default function UserCard({image,fullname,email,phone,address}){
    return (
        <div className="admin-user-card">
          <img src={image} alt="content" className="user-img"/>
          <p className="user-fullname">{fullname}</p>
          <p className="user-email">{email}</p>
          <p className="user-phone">{phone}</p>
          <p className="user-address">{address}</p>
        </div>
    )
}
export default function AdminAppointmentCard({image,email,date,time}){
    return (
        <div className="admin-appointment-card">
          <img src={image} alt="content" className="appointment-img"/>
          <p className="appointment-email">{email}</p>
          <p className="appointment-date">{date}</p>
          <p className="appointment-time">{time}</p>
        </div>
    )
}
import AdminAppointmentCard from "./AdminAppointmentCard";
import tester from '../assets/images/tester.jpg'
import doctor from '../assets/images/doctor.png';

export default function AdminAppointments(){
    return (
        <div>
            <AdminAppointmentCard  image={tester} email={'adejojuaires@gmail.com'} date={'12/05/25'} time={'9:00am'}/>
            <AdminAppointmentCard  image={doctor} email={'goodadet20@gmail.com'} date={'5/06/25'} time={'3:00pm'}/>
        </div>
    )
}
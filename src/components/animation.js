import DoctorPatientScene from '../components/DoctorPatientScene';
import doctor from '../assets/images/doctor.png'

export default function Animation() {
  return (
    <div className="animation">
      <img src={doctor} className='animation-img'/>
    </div>
  );
}

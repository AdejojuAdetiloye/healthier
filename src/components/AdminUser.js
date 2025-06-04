import UserCard from "./UserCard";
import user from '../assets/images/user.png';
import user2 from '../assets/images/user2.png';

export default function Users(){
    return (
        <div className="admin-user-div">
            <UserCard image={user} alt="content" fullname={'Adejoju Aires'} email={'adejojuaires@gmail.com'} phone={'09015816695'} address={'4, ogunleye street, the bells'} />
            <UserCard image={user2} alt="content" fullname={'Goodness Adetiloye'} email={'goodadet20@gmail.com'} phone={'07067923101'} address={'4243,Alausa, ikeja, Lagos'} />
        </div>
    )
}
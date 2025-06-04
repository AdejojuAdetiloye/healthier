import AdminSidebar from "./components/AdminSidebar";
import "./Admin.css";
import AdminBlogs from "./components/AdminBlogs";
import AdminAppointments from "./components/AdminAppointments";
import Users from "./components/AdminUser";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import CreateBlog from "./components/CreateBlog";

export default function Admin() {
  const [isBlogs, setIsBlogs] = useState(true);
  const [isAppointment, setIsAppointment] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [isCreateBlog, setIsCreateBlog] = useState(false);

  return (
    <div className="Admin">
      {/* Sidebar */}
      <div className="sidebar-div">
        <AdminSidebar
          isBlogs={isBlogs}
          setIsBlogs={setIsBlogs}
          isUsers={isUsers}
          setIsUsers={setIsUsers}
          isAppointment={isAppointment}
          setIsAppointment={setIsAppointment}
          isCreateBlog={isCreateBlog}
          setIsCreateBlog={setIsCreateBlog}
        />
      </div>

      {/* main content */}
      <div className="admin-main-div">
        <ProfileCard />
        {isBlogs && <AdminBlogs />}
        {isAppointment && <AdminAppointments />}
        {isUsers && <Users />}
        {isCreateBlog && <CreateBlog />}
      </div>
    </div>
  );
}


import bitterkola from '../assets/images/bitter-kola.jpg';
import vegetables from '../assets/images/vegatables.jpg';
import tester from '../assets/images/tester.jpg';
import AdminBlogCard from './AdminBlogCard';


export default function AdminBlogs() {
  return (
    <div>
      <AdminBlogCard
        image={bitterkola}
        title={"Benefits of eating Bitter Kola"}
      />
      <AdminBlogCard
        image={vegetables}
        title={"How to Boost Immune system by eating vegetables"}
      />
      <AdminBlogCard
        image={tester}
        title={"How to protect the eys with the use of tinted specs"}
      />
    </div>
  );
}

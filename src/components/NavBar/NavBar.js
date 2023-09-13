import Link from "next/link";
import style from "./NavBar.module.css"
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Posts',
  route: '/posts'
}, {
  label: 'About Me',
  route: '/about'
},]
function NavBar() {
  return (
    <nav className={`${style.NavBar} bg-gray-900 text-white py-8 flex justify-between items-center pr-4 `}>
      <div className={`text-2xl font-bold ${style.logo}`}>
        <Link href="/">AUCO Prueba</Link>
      </div>
      <ul className="flex space-x-20">
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route} className="hover:text-gray-400">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
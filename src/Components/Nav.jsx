import { Link, NavLink } from "react-router-dom";

const Nav = () => {


     const NAVLIST=<div className="flex gap-10">
       
        <NavLink to="/messages" className={({ isActive, isPending }) =>  isPending ? "l" : isActive ? "text-green-400" : "hover:text-red-400 font-bold text-md" }>START HERE</NavLink>
       

        <NavLink to="/messages" className={({ isActive, isPending }) =>  isPending ? "l" : isActive ? "text-green-400" : "hover:text-red-400 font-bold text-md" }>BLOG</NavLink>

        <NavLink to="/messages" className={({ isActive, isPending }) =>  isPending ? "l" : isActive ? "text-green-400" : "hover:text-red-400 font-bold text-md" }>ABOUT US</NavLink>

        <NavLink to="/messages" className={({ isActive, isPending }) =>  isPending ? "l" : isActive ? "text-green-400" : "hover:text-red-400 font-bold text-md" }>CONTACT US</NavLink>


     </div>


    return (
        <div>
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {NAVLIST}
      </ul>
    </div>
    <div className="relative">
    <Link to='/' className="text-3xl font-extrabold ">TM influencer</Link>
     <div className=" border-2  w-3 h-3 rounded-full bg-red-400  absolute top-0 right-[149px] "></div>
     {/* bg-gradient-to-r from-gray-400 to-red-400 */}
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-10 items-center justify-center">
    {NAVLIST}
  
    </ul>
  </div>
  <div className="navbar-end">
    <button className="bg-[#ce5027] p-2">GET STARTED</button>
  </div>
</div>
        </div>
    );
};

export default Nav;
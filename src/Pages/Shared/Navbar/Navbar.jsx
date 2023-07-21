import { GrPowerCycle } from 'react-icons/gr';
import { GiSelfLove } from 'react-icons/gi';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const list = <>
  <li><a>Item 1</a></li>
<li><a>Item 2</a></li>
  </>
  return (
    <div>
      <div className="flex  py-5 justify-between items-center align-middle px-5">

        {/* left Nav */}

<div className="drawer lg:hidden">
<input id="my-drawer" type="checkbox" className="drawer-toggle" />

<div className="drawer-content">

{/* Page content here */}

<label htmlFor="my-drawer" className="swap swap-rotate">
<input type="checkbox" />

{/* hamburger icon */}
<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

{/* close icon */}
<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
</label>
</div> 
<div className="drawer-side">
<label htmlFor="my-drawer" className="drawer-overlay"></label>
<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
{/* Sidebar content here */}
{list}

</ul>
</div>
</div>
<div>
<Link className="lg:text-left text-base hidden lg:block">ShopO</Link>
</div>





{/* center Nav */}
<h1 className='lg:hidden sm:block text-center  mr-44'>ShopO</h1>
<div className="hidden sm:block">

  <input type="text" placeholder="Search Products" className="pl-5 py-2 rounded-l-sm border" name="" id="" />

  <div className="dropdown font-semibold">
<label tabIndex={0} className="bg-white border py-[9px] rounded-r-sm px-5">All Category</label>
<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
{list}
</ul>
</div>
  <button className='bg-orange-500 text-white font-semibold py-2 px-3'>Search</button>
 
  {/* <input type="text" placeholder="A" /> */}
</div>

<div className="flex justify-around items-center gap-5">
  <h1 className="hidden sm:block text-2xl"> <GrPowerCycle></GrPowerCycle> </h1>
  <h1 className="hidden sm:block text-2xl"> <GiSelfLove></GiSelfLove> </h1>
  <h1 className='text-2xl'><BsFillBagCheckFill></BsFillBagCheckFill></h1>
  <h1 className="hidden text-2xl sm:block"><CgProfile></CgProfile></h1>
</div>
</div>



<div className='bg-orange-500 text-white font-semibold hidden lg:flex px-5 py-3 justify-between'>

  <h1>
    All Categories
  </h1>
  <ul className='flex gap-5'>
    <Link>Home</Link>
    <Link>Shop</Link>
    <Link>Pages</Link>
    <Link>About</Link>
    <Link>Blog</Link>
    <Link>Contact</Link>
  </ul>

  <button>Become a Seller</button>

</div>
    </div>
  );
};

export default Navbar;
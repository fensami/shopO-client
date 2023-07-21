import samsung from '../../../assets/bannerSamsung_1.png'
import banner_2 from '../../../assets/banner_2.png'
import banner_3 from '../../../assets/banner_3.png'
import {MdOutlineLocalShipping} from 'react-icons/md'
import {GrPowerCycle,GrSecure} from 'react-icons/gr'
import {GiTrophyCup} from 'react-icons/gi'




const Banner = () => {
  return (
   <div>
     <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:w-11/12 mx-auto'>

<article className='flex md:col-span-2 justify-around bg-pink-200'>
 <div className='mt-12'>
  <h1 className='py-1 px-2 text-center md:font-bold rounded-full bg-slate-100'>NEW RELEASED</h1>
 <p className='md:text-4xl my-8'>Apple wireless</p>
 <p className='md:text-5xl text-4xl font-bold'>Samsung </p>
 <p className='text-5xl font-bold my-5'>S10 +</p>
 <button className='border-b-2 font-bold text-xl border-orange-500'>Shop Now</button>
 </div>

<img className='md:py-12 py-12  md:h-auto' src={samsung} />
</article>


<article className='grid grid-flow-row mx-auto gap-5'>

    
    <div>
    <img src={banner_2} alt="" />
    </div>
  
    <div>
    <img src={banner_3} alt="" />
    </div>



</article>
</div>



<div className='bg-white grid grid-cols-1 gap-8 md:grid-cols-4 my-8 w-11/12 mx-auto py-4 px-5'>



  <article className='flex gap-5 items-center'>
    {/* <img src="" alt="" /> */}
    <MdOutlineLocalShipping className='text-5xl text-yellow-300'></MdOutlineLocalShipping>
    <div>
      <h1>Free Shipping</h1>
      <p>When ordering over $100</p>
    </div>
  </article>


  <article className='flex gap-5 items-center'>
    {/* <img src="" alt="" /> */}
    <GrPowerCycle className='text-5xl text-yellow-400'></GrPowerCycle>
    <div>
      <h1>Free Return</h1>
      <p>Get Return within 30 days</p>
    </div>
  </article>


  <article className='flex gap-5 items-center'>
    {/* <img src="" alt="" /> */}

<GrSecure className='text-5xl text-yellow-700'></GrSecure>
    {/* <GrSecure className='text-5xl text-white'></GrSecure> */}
    <div>
      <h1>Free Shipping</h1>
      <p>When ordering over $100</p>
    </div>
  </article>


  <article className='flex gap-5 items-center'>
    {/* <img src="" alt="" /> */}
    <GiTrophyCup className='text-5xl text-yellow-300'></GiTrophyCup>
    <div>
      <h1>Free Shipping</h1>
      <p>When ordering over $100</p>
    </div>
  </article>



</div>
   </div>
  );
};

export default Banner;
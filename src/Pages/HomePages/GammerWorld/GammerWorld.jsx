import { Link } from "react-router-dom";
import './GammerWorld.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {TbArrowsCross} from 'react-icons/tb'
import {GiRecycle} from 'react-icons/gi'
import banner from '../../../assets/gammerBannerWatch.png'

import gammer_1 from '../../../assets/gammer_1.png'

import {AiFillStar} from 'react-icons/ai'
import {GiSelfLove} from 'react-icons/gi'

const GammerWorld = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between">
      <h1 className="text-2xl font-bold">Gammer World</h1>
      <Link className="font-bold text-2xl">View More <span><BsArrowRightShort></BsArrowRightShort></span></Link>
      </div>

      <div className="grid md:grid-cols-4 gap-5 grid-cols-1">

        <article className="bg-white p-5">
          <h1 className="mb-5">Mobile & Tablet</h1>
          
           <ul className="grid grid-rows-4 gap-1">
           <Link>Xioami</Link>
            <Link>Apple</Link>
            <Link>Google</Link>
            <Link>Samsung</Link>
           </ul>
          
          <button className="font-bold mt-4">Shop Now </button>

          <img src={banner} alt="" />
        </article>


        <article className="kaku_2">
         <img className="w-3/4 mx-auto" src={gammer_1} alt="" />

         <div className="mt-10 mb-5 text-2xl flex text-yellow-500">
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
         </div>
         <p className="font-bold text-3xl">Gamming Consol</p>

         <p className="mt-5 font-bold text-2xl">$ <span>12.13</span></p>
         

         <div className="content_2">
         <h1><TbArrowsCross></TbArrowsCross></h1>
         <p className=""><GiSelfLove></GiSelfLove></p>
        
         <h2><GiRecycle/></h2>
         <button className="btn btn-primary text-white mt-5">add to cart</button>
         </div>

         

        </article>

      </div>






      
    </div>
  );
};

export default GammerWorld;
import brand_1 from '../../../assets/Brand_1.png'
import brand_2 from '../../../assets/Brand-2.png'
import brand_3 from '../../../assets/Brand-3.png'
import brand_4 from '../../../assets/Brand-4.png'
import brand_5 from '../../../assets/Brand-5.png'
import brand_6 from '../../../assets/Brand-6.png'
import brand_7 from '../../../assets/Brand-7.png'
import brand_8 from '../../../assets/Brand-8.png'
import brand_9 from '../../../assets/Brand-9.png'
import brand_10 from '../../../assets/Brand-10.png'
import brand_11 from '../../../assets/Brand-11.png'
import brand_12 from '../../../assets/Brand-12.png'
const ShopBrand = () => {
  return (
    <div>
      <h1>Shop by Brand</h1>

      <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto my-8 items-center md:grid-cols-6'>
        <img src={brand_1} alt="" />
        <img src={brand_2} alt="" />
        <img src={brand_3} alt="" />
        <img src={brand_4} alt="" />
        <img src={brand_5} alt="" />
        <img src={brand_6} alt="" />
        <img src={brand_7} alt="" />
        <img src={brand_8} alt="" />
        <img src={brand_9} alt="" />
        <img src={brand_10} alt="" />
        <img src={brand_11} alt="" />
        <img src={brand_12} alt="" />

      </div>
      
    </div>
  );
};

export default ShopBrand;
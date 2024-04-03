import arrow_icon from '../assets/breadcrum_arrow.png'

function Breadcrum(props){

    const {product} = props;

    return(
        <div className="flex text-sm md:text-base">
            HOME <img className='w-4 p-1 h-5' src={arrow_icon} alt="" /> SHOP <img className='w-4 p-1 h-5' src={arrow_icon} alt="" /> {product.category} <img className='w-4 p-1 h-5' src={arrow_icon} alt="" />{product.name}
        </div>
    )
}

export default Breadcrum;
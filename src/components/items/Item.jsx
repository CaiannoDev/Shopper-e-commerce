import { Link } from 'react-router-dom';



function Item(props){
    return (
        <div className="hover:scale-105">
            <Link to={`/product/${props.id}`} ><img className='h-[14rem] md:h-[20rem]' onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p className='md:text-lg md:w-[17rem]'>{props.name}</p>
            <div className='item-prices'>
                <div className="text-red-600 font-bold">
                    ${props.new_price}
                </div>
                <div className="line-through text-gray-700 text-lg">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item;
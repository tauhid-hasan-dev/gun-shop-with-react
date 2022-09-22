import React from 'react';

const Gun = (props) => {
    const {name, img, bullet, action, price, capacity} = props.gun;
    const {addToCart} = props;
    console.log(addToCart);
    /* console.log(name, img, bullet, action, price, capacity); */
    return (
        <div>
            <div className="card bg-base-100 shadow-xl w-full h-full">
                <figure ><img src={img} alt="Guns" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-primary">{action}</div>
                    </h2>
                    <p className='text-2xl font-bold text-start'>Price: {price}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{bullet}</div> 
                        <div className="badge badge-outline">{capacity}</div>
                    </div>
                    <div className='justify-between flex mt-3'>
                        <button className="btn btn-sm btn-outline w-[48%]" onClick={()=>addToCart()}>Add to cart</button>
                        <button className="btn btn-sm btn-outline w-[48%]">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gun;
import React from 'react'

function ProductCard(props) {
    return (
        <div className='bg-white shadow-md rounded-lg p-4 m-4 w-64 hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <img src={props.image} alt={props.name} className='w-full h-32 object-cover rounded-t-lg mb-4 rounded-t-lg' />
            <h1 className='text-center text-2xl font-bold text-gray-800'  >
                <p className='text-xl font-semibold'>{props.name}</p>
                <p className='text-gray-600 text-sm'>{props.description}</p>
                <p className='text-lg font-medium text-gray-800 mt-2'>{props.price}</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Add to Cart</button>
            </h1>
        </div>
    )
}

export default ProductCard
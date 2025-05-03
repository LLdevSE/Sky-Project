import React from 'react';

function ProductCard(props) {
    return (
        <div className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden p-4 m-4 w-72 transition-shadow duration-300 ease-in-out">
            {/* Image */}
            <img
                src={props.image || 'https://via.placeholder.com/300x200.png?text=Product+Image'}
                alt={props.name}
                className="w-full h-44 object-cover rounded-xl mb-3"
            />

            {/* Content */}
            <div className="text-center space-y-1">
                <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
                <p className="text-gray-500 text-sm">{props.description}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">{props.price}</p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;

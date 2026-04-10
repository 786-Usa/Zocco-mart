import React from 'react'

const BestSellingPage = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Best Selling Products</h1>
        <p className='text-center text-gray-500 mt-2'>Discover the most popular products our customers love</p>

        {/* Placeholder for best selling products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
            {/* Product cards would go here */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
                <div className='bg-gray-50 rounded-2xl p-4 flex items-center justify-center'>
                    <img src='https://via.placeholder.com/150' alt='Product' className='max-h-[150px] object-contain' />
                </div>
                <h2 className='text-lg font-semibold mt-4'>Product Name</h2>
                <p className='text-sm text-gray-500 mt-1'>Short description of the product.</p>
                <div className='flex gap-3 items-center mt-2'>
                    <span className='text-lg font-bold'>$99.99</span>
                    <span className='line-through text-gray-400'>$149.99</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSellingPage
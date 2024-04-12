import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_PRODUCT_PENDING, GET_PRODUCT_PENDING } from '../../redux-saga/user/action/action';

const Product = () => {

    let pname = React.useRef();
    let pdesc = React.useRef();
    let price = React.useRef();

    let dispatch = useDispatch();

    let products = useSelector((state) => state.userReducer.products);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PENDING })
    })

    let addProduct = async (e) => {

        e.preventDefault();

        let data = {
            name: pname.current.value,
            description: pdesc.current.value,
            price: price.current.value,
            avaliblity:true
        }

        dispatch({type:ADD_PRODUCT_PENDING,payload:data})
    }

    return (
        <div>
            <div data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} className="plus-icon bg-[rgba(0,0,0,0.1)] w-[50px] text-[20px] h-[50px] rounded-full flex justify-center items-center hover:bg-white fixed bottom-[20px] right-[20px] cursor-pointer">
                <i className="fa-solid fa-plus"></i>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Avaliblity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((val, ind) =>
                                <tr className="bg-white border-b hover:bg-gray-50 ">
                                    <td className="p-4">
                                        <img src="https://flowbite.com/docs/images/products/iphone-12.png" className="w-[70px] " alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                                        {val.name}
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                                        ${val.price}
                                    </td>
                                    <td>
                                        <label className="inline-flex items-center cursor-pointer ps-7">
                                            {val.avaliblity ? <input type="checkbox" value="" className="sr-only peer" checked /> : <input type="checkbox" value="" className="sr-only peer" />}
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </td>
                                    <td >
                                        <button className='m    s-6 text-sky-600 hover:border-b-2 hover:border-sky-600 border-b-2 border-white '>Edit</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-red-600  hover:underline">Remove</a>
                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>


            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                Add Product hear
                            </h3>
                            <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#" onSubmit={addProduct}>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Product name</label>
                                    <input type="text" ref={pname} name="pname" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Product description</label>
                                    <input type="text" ref={pdesc} name="pdesc" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Product price</label>
                                    <input type="number" ref={price} name="price" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product

import { Input } from "@material-tailwind/react";
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const productImgURL = form.productImgURL.value;
        const description = form.description.value;

        const product = { name, brand, type, price, ratting, productImgURL, description };


        fetch('https://aircraftengineersstore-backend.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success(" Product added successfully ", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    form.reset();
                }
            })
    }

    return (
        <>
            <div className="max-w-4xl mx-auto px-8 py-12">
                <h1 className="text-5xl py-6 text-center">Add product</h1>
                <form onSubmit={handleAddProduct} className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="w-full lg:col-span-2">
                            <Input label="Product name" name="name" type="text" required />
                        </div>
                        <div className="w-full">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <select name="brand" className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    <option value="Facom Tools">Facom Tools</option>
                                    <option value="Chicago Pneumatic">Chicago Pneumatic</option>
                                    <option value="Macnaught">Macnaught</option>
                                    <option value="Ceta Form">Ceta Form</option>
                                    <option value="Stahlwille">Stahlwille</option>
                                    <option value="Redashe">Redashe</option>
                                </select>
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Brand Name
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <Input label="Product type " name="type" type="text" required />
                        </div>
                        <div className="w-full">
                            <Input label="Price" name="price" type="text" required />
                        </div>
                        <div className="w-full">
                            <div className="relative h-10 w-full min-w-[200px]">
                                <select name="ratting" className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    <option value="1"> 1 Star </option>
                                    <option value="2"> 2 Star </option>
                                    <option value="3"> 3 Star </option>
                                    <option value="4"> 4 Star </option>
                                    <option value="5"> 5 Star </option>
                                </select>
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Ratting
                                </label>
                            </div>
                        </div>
                        <div className="w-full lg:col-span-2">
                            <Input label="Product Image URL" name="productImgURL" type="url" required />
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="relative w-full min-w-[200px]">
                            <textarea
                                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                name="description"
                                rows="12"
                                required
                            ></textarea>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Short description
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <input type="submit" value="Add product" className="py-2 px-4 bg-primaryColor !text-white rounded-md cursor-pointer" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
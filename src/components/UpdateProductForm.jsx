
const UpdateProductForm = ({loadedProduct, handelUpdateTask}) => {

    const { price, quantity, product_name, description, rating } = loadedProduct;

    return (
        <>
            <form onSubmit={handelUpdateTask} className='py-5 w-[80%] mx-auto '>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" defaultValue={product_name}
                            name='product_name'
                            className="input input-info"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="number" defaultValue={price}
                            name='price'
                            className="input input-info"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" defaultValue={quantity}
                            name='quantity'
                            className="input input-info"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input min="1"
                            max="5"
                            step="0.01" type="number" defaultValue={rating}
                            name='rating'
                            className="input input-info"
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text"
                        name='description'
                        defaultValue={description}
                        className="textarea textarea-info w-full"
                    />
                </div>
                <div className="form-control mt-6 text-center">
                    <input className="btn btn-active btn-neutral mb-6" type="submit" value='update' />
                </div>
            </form>
        </>
    );
};

export default UpdateProductForm;
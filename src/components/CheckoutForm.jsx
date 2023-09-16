
const CheckoutForm = ({ handlePayment }) => {
    return (
        <>
            <form onSubmit={handlePayment} className="bg-zinc-400 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block mb-2 font-bold">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="cardName" className="block mb-2 font-bold">
                        Cardholder Name
                    </label>
                    <input
                        type="text"
                        id="cardName"
                        placeholder="Alex Zayn"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="expiry" className="block mb-2 font-bold">
                            Expiry
                        </label>
                        <input
                            type="text"
                            id="expiry"
                            placeholder="MM / YY"
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="cvc" className="block mb-2 font-bold">
                            CVC
                        </label>
                        <input
                            type="text"
                            id="cvc"
                            placeholder="123"
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline info px-4 py-2 rounded w-full"
                >
                    Pay Now
                </button>
            </form>
        </>
    );
};

export default CheckoutForm;
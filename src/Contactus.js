const Contactus =()=>{
    return(
        <div className="">
            <h1 className="font-serif text-3xl p-4 m-4">Contact us</h1>
            <form>
                <input
                type="text"
                placeholder="name"
                className="font-serif text-2xl p-2 m-2 border border-black rounded-lg"
                />
                <input
                type="text"
                placeholder="Message"
                className="font-serif text-2xl p-2 m-2 border border-black rounded-lg"
                />
                <button className="font-serif text-2xl p-2 m-2 border border-black rounded-lg bg-black text-white">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Contactus;
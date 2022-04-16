const Contact = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-between gap-4 py-14 px-8 lg:px-24 xl:px-48">
            <div className="flex-1 flex flex-col items-center shadow-2xl bg-white p-8 rounded-xl">
                <div className="w-8">
                    {/* <MdLocationOn /> */}
                </div>
                <div className="text-center">Str. Dionisie cel Mic, nr. 26 <br /> Constanta, Romania, 900363</div>
            </div>
            <div className="flex-1 flex flex-col items-center shadow-2xl bg-white p-8 rounded-xl">
                <div className="w-8">
                    {/* <MdPhone /> */}
                </div>
                <div className="text-center">
                    <b>Tel: </b>+40 722 590 420
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center shadow-2xl bg-white p-8 rounded-xl">
                <div className="w-8">
                    {/* <MdEmail /> */}
                </div>
                <div className="text-center">
                    <a className="text-black" href="mailto:malcons_com@yahoo.com">
                        malcons_com@yahoo.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
const Services = () => {
    return (
        <div className="w-full py-8 px-8 lg:px-24 xl:px-48 text-white font-mukta">
            <h1 className="text-3xl text-center">Servicii Autorizate Incluse</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 my-4">
                <div className="flex flex-col items-center text-center">
                    <div className="w-8">
                        {/* <FaCheck /> */}
                    </div>
                    <h2 className="text-xl pt-2">Executia instalatiilor</h2>
                    <p className="pt-4">
                        Instalatii sanitare, termice si electrice dupa proiect sau la
                        interventii rapide
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-8">
                        {/* <FaCheck /> */}
                    </div>
                    <h2 className="text-xl pt-2">Servicii de amenajare interioara si exterioara</h2>
                    <p className="pt-4">Igienizare, modernizare, design</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-8">
                        {/* <FaCheck /> */}
                    </div>
                    <h2 className="text-xl pt-2">Trasport sigur si rapid al materialelor</h2>
                    <p className="pt-4">
                        Transportul materialelor se face din depozitul propriu sau de la
                        furnizori autorizati
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
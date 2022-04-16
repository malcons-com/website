import Constanta from '../../public/static/images/constanta.jpeg';

const About = () => {
    return (
        <div className="w-full py-8 px-8 lg:px-24 xl:px-48 text-white font-mukta">
            <h1 className="text-3xl text-center">Despre Malcons-Com</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 my-4">
                <div>
                    <h2 className="text-xl">Constructii civile si industriale</h2>
                    <p className="pt-4">
                        Societatea Malcons-Com dispune de echipamente tehnice profesionale
                        necesare pentru a oferi servicii complete in constructii efectuate cu
                        atentie la detalii.
                    </p>
                    <ul className="list-disc list-inside pt-4">
                        <li>Case la cheie</li>
                        <li>Excavatii si Terasamente</li>
                        <li>Reparatii si Consolidari</li>
                        <li>Finisaje interioare si exterioare</li>
                        <li>Termoizolatii si hidroizolatii</li>
                        <li>Lucrari de tamplarie si dulgherie</li>
                        <li>Confectii metalice si confectii din PVC</li>
                    </ul>
                </div>
                <div>
                    <img src={Constanta} alt="Constanta" className="shadow-2xl rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default About;
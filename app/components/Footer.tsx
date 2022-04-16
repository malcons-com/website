import Logo from '../../public/static/images/malcons-no-bg.png';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-8 lg:px-24 xl:px-48">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 w-full">
                <div className="flex flex-row my-auto gap-4 col-span-1">
                    <p className="text-white text-3xl text-left my-auto">
                        <img src={Logo} alt="Malcons" />
                    </p>
                </div>
                <div className="order-1 sm:order-2 col-span-1">
                    <p className="text-white text-lg mb-4"><b>CUI: RO 5739641</b></p>
                    <p className="text-white text-lg mb-4">Nr. înmatriculare: <b> J13/1924/1994</b></p>
                    <p className="text-white text-lg mb-4">Obiect de activitate: <b>4120</b></p>
                    <p className="text-white text-lg mb-4">Data Înregistrării: <b>08 Iunie 1994</b></p>
                </div>
                <div className="order-1 sm:order-2 col-span-1">
                    <p className="text-white text-lg mb-4"><b>Tel: </b>+40 722 590 420</p>
                    <p className="text-white text-lg mb-4">
                        <b>Email: </b>
                        <a className="text-white text-lg" href="mailto:malcons_com@yahoo.com">
                            malcons_com@yahoo.com
                        </a>
                    </p>
                    <p className="text-white text-lg mb-4">
                        <b>Program: </b>7:00 - 17:00, Luni-Vineri
                    </p>
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
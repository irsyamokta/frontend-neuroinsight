import FooterBrand from "../footer/FooterBrand";
import FooterTeam from "../footer/FooterTeam";
import FooterBottom from "../footer/FooterBottom";
import Image from "../../../assets/img/img-3.png";

const Footer = () => {
    return (
        <footer
            className="w-full text-white py-12 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Image})` }}
        >
            <div className="relative z-10 mx-auto px-4 lg:px-10 flex flex-col items-center gap-8">
                <FooterBrand />
                <FooterTeam />
                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;
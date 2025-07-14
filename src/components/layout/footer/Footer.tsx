import FooterBrand from "../footer/FooterBrand";
import FooterTeam from "../footer/FooterTeam";
import FooterBottom from "../footer/FooterBottom";

const Footer = () => {
    return (
        <footer
            className="w-full text-white py-12 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/src/assets/img/img-3.png')" }}
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
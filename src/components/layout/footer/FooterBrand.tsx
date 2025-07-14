import LogoWhite from "../../../assets/logo/logo-white.png";

const FooterBrand = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={LogoWhite} alt="Logo" className="w-76 md:w-96" />
            <p className="text-sm md:text-base text-gray-300 text-center -mt-2">
                Solusi Awal untuk Kesehatan Otak yang Lebih Baik.
            </p>
        </div>
    );
};

export default FooterBrand;
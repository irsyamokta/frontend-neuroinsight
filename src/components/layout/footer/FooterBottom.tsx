const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Visualisasi Data", href: "#visualisasi-data" },
    { name: "Demo", href: "#demo" },
];

const FooterBottom = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center text-sm text-gray-300 gap-2">
            <p>{new Date().getFullYear()}. All Right Reserved</p>
            <div className="flex gap-4 sm:gap-6">
                {links.map((link) => (
                    <a key={link.name} href={link.href} className="hover:text-white underline">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterBottom;
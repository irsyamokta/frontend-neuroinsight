import React from "react";
import Image from "../../assets/img/img-1.png";
import Button from "../../components/ui/button/Button";

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="w-full py-12">
            <div className="mx-auto flex flex-col items-center text-center">
                {/* Judul */}
                <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-snug">
                    Periksa Kesehatan Otak Anda <br className="hidden md:block" />
                    dengan Lebih Mudah
                </h1>

                {/* Deskripsi */}
                <p className="max-w-2xl text-base md:text-lg mb-6">
                    Sistem ini membantu dokter radiologi mengidentifikasi kemungkinan jenis tumor otak secara
                    cepat dan efisien berdasarkan citra MRI yang Anda unggah.
                </p>

                {/* Tombol */}
                <a href="#demo">
                    <Button variant="primary" size="lg" className="text-sm px-3 py-1.5">Periksa Sekarang</Button>
                </a>

                {/* Gambar ilustrasi */}
                <div className="mt-12 w-full">
                    <img
                        src={Image}
                        alt="Ilustrasi MRI"
                        className="w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
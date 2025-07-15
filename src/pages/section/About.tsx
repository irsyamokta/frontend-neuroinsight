import React from "react";
import Label from "../../components/ui/label/Label";
import Image from "../../assets/img/img-2.png";

const AboutSection: React.FC = () => {
    return (
        <section id="tentang" className="w-full py-12 text-gray-800">
            <div className="mx-auto flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-16">
                {/* Gambar */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={Image}
                        alt="Tentang NeuroInsight"
                        className="rounded-2xl w-full object-cover"
                    />
                </div>

                {/* Teks */}
                <div className="flex flex-col items-center lg:block w-full lg:w-1/2 lg:mt-10">
                    <Label label="Tentang" />
                    <h2 className="text-2xl md:text-5xl font-semibold mb-4 mt-4">
                        Mengenal NeuroInsight
                    </h2>
                    <p className="text-sm text-center sm:text-base lg:text-start leading-relaxed text-gray-700">
                        NeuroInsight adalah platform web interaktif yang dirancang untuk membantu dokter radiologi dalam mengklasifikasikan jenis tumor berdasarkan gambar citra MRI otak ke dalam empat kategori utama, yaitu Glioma, Meningioma, Pituitary, dan No Tumor. Platform ini memanfaatkan model Deep Learning berbasis Convolutional Neural Network (CNN) yang telah dilatih menggunakan dataset citra MRI otak, sehingga mampu mengenali pola visual pada jaringan otak dengan tingkat akurasi tinggi. NeuroInsight menyediakan solusi awal yang cepat, informatif, dan mudah diakses melalui web-based demo, guna mendukung proses identifikasi jenis tumor secara visual oleh dokter radiologi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

import React, { useState } from "react";
import Accordion from "../../components/ui/accordion/Accordion";
import Label from "../../components/ui/label/Label";
import { TbFileUpload, TbSearch, TbFileText } from "react-icons/tb";
import Image1 from "../../assets/img/img-4.png";
import Image2 from "../../assets/img/img-5.png";
import Image3 from "../../assets/img/img-6.png";

const HowItWork: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState("upload");

    const data = [
        {
            id: "upload",
            title: "Unggah Gambar MRI",
            description:
                "Pengguna mengunggah citra MRI otak melalui halaman demo. Sistem mendukung format gambar umum seperti JPG, JPEG dan PNG dengan ukuran maksimum 10MB. Proses unggah ini dirancang agar cepat dan mudah.",
            icon: <TbFileUpload size={32} className="text-primary text-lg mt-1 -ml-1" />,
            image: Image1,
        },
        {
            id: "process",
            title: "Pemrosesan Gambar",
            description:
                "Gambar yang diunggah akan diproses oleh model deep learning yang telah dilatih menggunakan ribuan citra MRI otak. Model ini mengekstraksi fitur penting dari gambar dan menganalisisnya untuk mengidentifikasi pola tumor.",
            icon: <TbSearch size={32} className="text-primary text-lg mt-1 -ml-1" />,
            image: Image2,
        },
        {
            id: "predict",
            title: "Hasil Prediksi Ditampilkan",
            description:
                "Sistem akan menampilkan hasil klasifikasi berupa jenis tumor (Glioma, Meningioma, Pituitary, atau No Tumor) beserta tingkat kepercayaan prediksi (confidence score dalam persen), serta penjelasan singkat dari hasil tersebut.",
            icon: <TbFileText size={32} className="text-primary text-lg mt-1 -ml-1" />,
            image: Image3,
        },
    ];

    const currentImage = data.find((item) => item.id === activeAccordion)?.image;

    return (
        <section id="cara-kerja" className="w-full py-12">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Label label="Cara Kerja" />
                    <h2 className="text-2xl md:text-5xl font-semibold mb-4 mt-4">
                        Bagaimana NeuroInsight Bekerja
                    </h2>
                    <p className="text-sm text-center sm:text-base  leading-relaxed text-gray-700">
                        Langkah-langkah sederhana untuk melakukan klasifikasi citra MRI otak menggunakan NeuroInsight.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Accordion */}
                    <div className="space-y-3">
                        {data.map((item) => (
                            <Accordion
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                isActive={activeAccordion === item.id}
                                onClick={() => setActiveAccordion(item.id)}
                            />
                        ))}
                    </div>

                    {/* Gambar */}
                    <div className="hidden sm:flex items-center justify-center">
                        <div className="bg-gray-25 w-full h-80 md:min-h-[455px] rounded-xl flex items-center justify-start overflow-hidden">
                            {currentImage ? (
                                <img
                                    src={currentImage}
                                    alt="Accordion content"
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <span className="text-gray-400 text-sm">Pilih salah satu langkah</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;

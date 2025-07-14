import React, { useState } from 'react';
import Button from '../../../components/ui/button/Button';
import { BsImages } from 'react-icons/bs';
import Dropdown from '../../../components/ui/dropdown/Dropdown';

interface UploadCardProps {
    status: string,
    setImage: (image: File) => void,
    setState: () => void,
    handlePredict: () => void
}
const UploadCard = ({ handlePredict, setImage, status, setState }: UploadCardProps) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
            setState;
        }
    };

    return (
        <div className="col-span-10 lg:col-span-4 bg-white p-6 rounded-xl border border-gray-400 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-5 flex items-center justify-between relative">
                Unggah gambar MRI
                <Dropdown text="Unduh sample data" link="https://google.com" />
            </h2>

            <label className="w-full h-[350px] lg:h-[450px] bg-blue-50 border-4 border-dashed border-primary hover:border-secondary rounded-xl mb-4 cursor-pointer overflow-hidden flex items-center justify-center">
                {imagePreview ? (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-xl"
                    />
                ) : (
                    <div className="flex flex-col items-center text-center">
                        <BsImages className="text-3xl sm:text-4xl text-primary mb-2" />
                        <p className="text-sm sm:text-base">Klik atau seret dan lepas untuk unggah gambar</p>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">JPG, JPEG, dan PNG (Max 10MB)</p>
                    </div>
                )}
                <input
                    id="upload"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    className="hidden"
                    onChange={handleImageChange}
                />
            </label>

            <div className="mt-auto flex justify-end">
                <Button
                    type="submit"
                    size="lg"
                    className="text-sm px-3 py-1.5"
                    disabled={!imagePreview || status === 'loading'}
                    onClick={handlePredict}
                >
                    {status === 'loading' ? 'Memproses...' : 'Prediksi Gambar'}
                </Button>
            </div>
        </div>
    );
};

export default UploadCard;
import { useState, useEffect } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { CgSandClock } from "react-icons/cg";
import { VscError, VscVerified } from "react-icons/vsc";
import PredictionResult from './PredictionResult';

interface ResultCardProps {
    status: string;
    loading: number;
    prediction?: any;
    imageUrl: string;
}

const ResultCard = ({ status, loading, prediction, imageUrl }: ResultCardProps) => {
    const [showFinalResult, setShowFinalResult] = useState(false);

    useEffect(() => {
        if (status === 'success') {
            const timeout = setTimeout(() => {
                setShowFinalResult(true);
            }, 1000);

            return () => clearTimeout(timeout);
        } else {
            setShowFinalResult(false);
        }
    }, [status]);

    const loadingMessages = [
        "Memindai gambar MRI Anda...",
        "Menguraikan pola, hampir selesai...",
        "Menyiapkan hasil diagnosis visual...",
    ];

    const renderResult = () => {
        if (status === 'idle') {
            return (
                <>
                    <FaRegStickyNote className="text-3xl sm:text-4xl text-primary mb-2" />
                    <p className="text-sm sm:text-base">Hasil klasifikasi kosong</p>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Belum ada gambar yang diprediksi</p>
                </>
            );
        }

        if (status === 'loading') {
            return (
                <>
                    <CgSandClock className="animate-spin text-4xl sm:text-5xl text-primary mb-2" />
                    <p className="text-sm sm:text-base font-medium text-gray-700">Prediksi sedang berjalan...</p>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">{loadingMessages[loading]}</p>
                </>
            );
        }

        if (status === 'success' && !showFinalResult) {
            return (
                <>
                    <VscVerified className="text-4xl sm:text-5xl text-primary mb-2" />
                    <p className="text-sm sm:text-base font-semibold">Prediksi selesai!</p>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Hasil akan segera ditampilkan</p>
                </>
            );
        }

        if(status === 'failed') {
            return (
                <>
                    <VscError className="text-4xl sm:text-5xl text-red-600 mb-2" />
                    <p className="text-sm sm:text-base font-semibold">Prediksi gagal!</p>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">Silakan coba lagi</p>
                </>
            );
            
        }

        if (status === 'success' && showFinalResult && prediction) {
            return <PredictionResult prediction={prediction} imagePreview={imageUrl}/>;
        }
    };

    return (
        <div className="col-span-10 lg:col-span-6 bg-white p-6 rounded-xl border border-gray-400 h-full">
            <h2 className="text-lg font-semibold mb-5">Hasil Prediksi</h2>
            <div
                className={`h-[350px] lg:h-[520px] border-t-2 border-gray-300 text-center
                    ${status === 'success' && showFinalResult && prediction
                        ? 'overflow-auto no-scrollbar'
                        : 'flex flex-col justify-center items-center'}
                `}
            >
                {renderResult()}
            </div>
        </div>
    );
};

export default ResultCard;
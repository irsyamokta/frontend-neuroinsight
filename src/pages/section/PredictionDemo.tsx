import React, { useState } from 'react';
import api from '../../api';
import Label from '../../components/ui/label/Label';
import UploadCard from './components/UploadCard';
import ResultCard from './components/ResultCard';

const PredictionDemoSection: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [prediction, setPrediction] = useState<any>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [loadingStep, setLoadingStep] = useState(0);

    const loadingMessages = [
        "Memindai gambar MRI Anda...",
        "Menguraikan pola, hampir selesai...",
        "Menyiapkan hasil diagnosis visual...",
    ];

    const handlePredict = async () => {
        if (!image) return;

        setStatus('loading');
        setLoadingStep(0);

        for (let i = 1; i < loadingMessages.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoadingStep(i);
        }

        try {
            const formData = new FormData();
            formData.append('file', image);

            const response = await api.post('/predict', formData);
            setPrediction(response.data);

            await new Promise((resolve) => setTimeout(resolve, 3000));
            setStatus('success');
        } catch (error) {
            console.error('Gagal mengirim prediksi:', error);
            setStatus('idle');
        }
    };

    return (
        <section id="demo" className="w-full py-12">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Label label="Demo" />
                    <h2 className="text-2xl md:text-5xl font-semibold mb-4 mt-4">
                        Prediksi Tumor Otak Secara Instan
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                        Unggah gambar MRI otak Anda dan lihat hasil klasifikasi jenis tumor dalam hitungan detik.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
                    {/* Upload Section */}
                    <UploadCard
                        handlePredict={handlePredict}
                        setImage={setImage}
                        status={status}
                        setState={() => setStatus('idle')}
                    />

                    {/* Prediction Result */}
                    <ResultCard status={status} loading={loadingStep} prediction={prediction} />
                </div>
            </div>
        </section>
    );
};

export default PredictionDemoSection;
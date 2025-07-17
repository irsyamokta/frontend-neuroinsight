import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Chart from 'react-apexcharts';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Button from '../../../components/ui/button/Button';
import PredictionPDF from '../../../components/pdf/PredictionPDF';

interface Props {
    prediction: any;
    imagePreview: string;
}

const PredictionResult: React.FC<Props> = ({ prediction, imagePreview }) => {
    const [doctorNote, setDoctorNote] = useState('');

    const {
        predicted_class,
        information,
        probabilities,
        metadata,
    } = prediction;

    const scores = [
        { label: 'Glioma', value: probabilities.glioma },
        { label: 'Meningioma', value: probabilities.meningioma },
        { label: 'Pituitary', value: probabilities.pituitary },
        { label: 'No Tumor', value: probabilities.notumor },
    ].sort((a, b) => b.value - a.value);;

    const date = new Date(metadata.prediction_time);
    const time = new Date();
    const formattedDate = format(date, 'EEEE, dd MMMM yyyy', { locale: id });
    const formattedTime = format(time, 'HH:mm', { locale: id });

    return (
        <div className="mt-6">
            {/* Metadata */}
            <div className="flex justify-between text-sm mb-6">
                <div className="flex flex-col items-start">
                    <p className="text-gray-600 font-medium">Tanggal</p>
                    <p className="font-semibold">{formattedDate}</p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-gray-600 font-medium">Waktu</p>
                    <p className="font-semibold">{formattedTime}</p>
                </div>
            </div>

            {/* Diagnosis */}
            <div className="text-center mb-8">
                <p className="text-gray-600">Diagnosis</p>
                <h3 className="text-2xl font-semibold capitalize">{predicted_class} Tumor</h3>
            </div>

            {/* Confidence Score */}
            <p className="text-center text-gray-600 mb-3">Confidence Score</p>
            <div className="grid md:grid-cols-2 text-center mb-10">
                {scores.map((score, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <Chart
                            options={{
                                chart: { type: 'radialBar', sparkline: { enabled: true } },
                                plotOptions: {
                                    radialBar: {
                                        hollow: { size: '50%' },
                                        dataLabels: {
                                            name: { show: false },
                                            value: {
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                offsetY: 5,
                                            },
                                        },
                                    },
                                },
                                labels: [score.label],
                                colors: ['#196feb'],
                            }}
                            series={[score.value]}
                            type="radialBar"
                            width={250}
                            height={250}
                        />
                        <p className="text-sm font-semibold mt-2">{score.label}</p>
                    </div>
                ))}
            </div>

            {/* Insight */}
            <div className="flex flex-col items-start mb-5">
                <h4 className="text-lg font-semibold text-gray-600 mb-3">Insight Klasifikasi</h4>
                <p className="text-start text-sm sm:text-base">{information.description}</p>
            </div>

            {/* Doctor Note */}
            <div className="mb-6">
                <label htmlFor="note" className="block text-start text-sm sm:text-base font-semibold text-gray-600 mb-2">
                    Catatan Dokter <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="note"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    placeholder="Tulis catatan dokter di sini..."
                    value={doctorNote}
                    onChange={(e) => setDoctorNote(e.target.value)}
                />
            </div>

            {/* Download Button */}
            <div className="w-full flex justify-end">
                <PDFDownloadLink
                    document={
                        <PredictionPDF
                            prediction={prediction}
                            imageUrl={imagePreview}
                            doctorNote={doctorNote}
                            timestamp={formattedDate + ' | ' + formattedTime}
                        />
                    }
                    fileName={`hasil_prediksi_${prediction.predicted_class}_${new Date().toISOString().slice(0, 10)}.pdf`}
                >
                    {({ loading }) => (
                        <Button
                            disabled={loading || doctorNote.trim() === ''}
                            size="lg"
                            className="text-sm px-3 py-1.5"
                        >
                            {loading
                                ? 'Unduh Hasil' : doctorNote.trim() === ''
                                    ? 'Unduh Hasil'
                                    : 'Unduh Hasil'}
                        </Button>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default PredictionResult;
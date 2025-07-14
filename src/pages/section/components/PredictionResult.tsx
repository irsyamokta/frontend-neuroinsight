import React from 'react';
import Chart from 'react-apexcharts';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Button from '../../../components/ui/button/Button';

interface Props {
    prediction: any;
}

const PredictionResult: React.FC<Props> = ({ prediction }) => {

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
                                                formatter: function (val: number) {
                                                    return `${val.toFixed(1)}%`;
                                                },
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
                <h4 className="font-semibold text-gray-600 mb-1">Insight Klasifikasi</h4>
                <p className="text-sm sm:text-base">{information.description}</p>
            </div>

            {/* Download Button */}
            <div className="w-full flex justify-end">
                <Button
                    size="lg"
                    className="text-sm px-3 py-1.5"
                    onClick={() => {
                        const blob = new Blob([JSON.stringify(prediction, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `hasil_prediksi_${predicted_class}.json`;
                        link.click();
                        URL.revokeObjectURL(url);
                    }}
                >
                    Unduh Hasil
                </Button>
            </div>
        </div>
    );
};

export default PredictionResult;
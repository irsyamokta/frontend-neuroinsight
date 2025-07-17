import ConfusionMatrix from "../chart/ConfusionMatrix";
import ValidationAccuracy from "../chart/ValidationAccuracy";
import ClassificationReport from "../chart/ClassificationReport";
import InfoCard from "./InfoCard";

const cardPerformance = [
    {
        title: "Training & Validation Accuracy per Epoch",
        description:
            "Grafik ini menunjukkan perkembangan akurasi model selama proses pelatihan. Garis training menunjukkan kinerja model pada data latih, sedangkan garis validation menunjukkan kinerja pada data uji. Grafik ini membantu melihat apakah model belajar dengan baik atau mengalami overfitting.",
        content: (
            <ValidationAccuracy />
        ),
    },
    {
        title: "Classification Report",
        description:
            "Laporan ini merangkum metrik evaluasi seperti precision, recall, dan F1-score untuk setiap kelas. Dengan melihat nilai-nilai ini, kita dapat menilai seberapa baik model mengenali masing-masing kategori dalam data.",
        content: (
            <ClassificationReport />
        ),
    },
    {
        title: "Confusion Matrix",
        description:
            "Confusion matrix menggambarkan jumlah prediksi yang benar dan salah untuk tiap kelas. Matriks ini memudahkan identifikasi pola kesalahan model, seperti kelas yang sering tertukar atau tidak dikenali dengan baik.",
        content: (
            <ConfusionMatrix />
        ),
    },
];

const StatisticCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {cardPerformance.map((card, idx) => {
                const isLast = idx === cardPerformance.length - 1;
                const isOdd = cardPerformance.length % 2 !== 0;

                const shouldCenter = isOdd && isLast;

                return (
                    <div
                        key={idx}
                        className={shouldCenter
                            ? 'sm:col-span-2 lg:col-span-1 sm:flex sm:justify-center'
                            : ''
                        }
                    >
                        <div className={shouldCenter
                            ? 'w-full sm:max-w-md lg:max-w-none'
                            : ''
                        }>
                            <InfoCard
                                title={card.title}
                                description={card.description}
                                content={card.content}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default StatisticCard;
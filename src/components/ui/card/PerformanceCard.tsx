import ConfusionMatrix from "../chart/ConfusionMatrix";
import ValidationAccuracy from "../chart/ValidationAccuracy";
import ClassificationReport from "../chart/ClassificationReport";
import InfoCard from "./InfoCard";
import AccuracyChart from "../chart/AccuracyChart";

const cardPerformance = [
    {
        title: "Akurasi Model",
        description:
            "Akurasi model adalah metrik yang mengukur seberapa baik model dapat mengenali kelas dalam data uji. Nilai akurasi yang tinggi menunjukkan bahwa model dapat dengan baik mengenali kelas dari citra MRI otak.",
        content: (
            <AccuracyChart />
        ),
    },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-6">
            {cardPerformance.map((card, idx) => {
                const isLast = idx === cardPerformance.length - 1;
                const isOdd = cardPerformance.length % 3 !== 0;

                const shouldCenter = isOdd && isLast;

                return (
                    <div
                        key={idx}
                        className={
                            shouldCenter
                                ? "md:col-span-1 lg:col-span-full 2xl:col-span-1 flex justify-center"
                                : ""
                        }
                    >
                        <div className={shouldCenter ? "w-full sm:max-w-sm md:max-w-md" : ""}>
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
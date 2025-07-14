import PieChart from "../chart/PieChart";
import InfoCard from "./InfoCard";

const colors = ["#4BA69E", "#D1C864", "#E45745", "#7B9ED9"];
const labels = ["Glioma", "Meningioma", "Pituitary", "No Tumor"];

const cardStatistics = [
    {
        title: "Distribusi Gambar Pada Data Training",
        description:
            "Menampilkan jumlah gambar MRI otak pada dataset training berdasarkan kelasnya. Distribusi ini digunakan untuk melatih model dalam mengenali pola dari setiap jenis tumor secara optimal.",
        content: (
            <PieChart
                labels={labels}
                series={[1321, 1339, 1595, 1457]}
                colors={colors}
            />
        ),
    },
    {
        title: "Distribusi Gambar Pada Data Testing",
        description:
            "Menampilkan jumlah gambar MRI otak pada dataset testing berdasarkan kelasnya. Dataset ini digunakan untuk menguji kemampuan model dalam mengklasifikasikan gambar yang belum pernah dilihat sebelumnya.",
        content: (
            <PieChart
                labels={labels}
                series={[300, 306, 405, 300]}
                colors={colors}
            />
        ),
    },
    {
        title: "Distribusi Training vs Testing",
        description:
            "Menunjukkan proporsi pembagian data antara training dan testing set. Distribusi ini penting untuk memastikan bahwa model dilatih dengan cukup data sambil tetap menjaga validitas pengujian melalui data yang tidak digunakan selama pelatihan.",
        content: (
            <PieChart
                labels={["Training", "Testing"]}
                series={[5712, 1311]}
                colors={colors}
            />
        ),
    },
];

const StatisticCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardStatistics.map((card, idx) => (
                <InfoCard
                    key={idx}
                    title={card.title}
                    description={card.description}
                    content={card.content}
                />
            ))}
        </div>
    )
};

export default StatisticCard;
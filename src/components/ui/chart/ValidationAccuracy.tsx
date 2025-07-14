import Chart from "react-apexcharts";

const validationAccuracy = () => {
    const epochs = Array.from({ length: 31 }, (_, i) => `Epoch ${i + 1}`);
    const trainingAccuracy = [
        0.4301, 0.7676, 0.8140, 0.8486, 0.8689, 0.8903, 0.9027, 0.9229, 0.9237, 0.9375,
        0.9433, 0.9381, 0.9611, 0.9494, 0.9650, 0.9713, 0.9821, 0.9793, 0.9838, 0.9751,
        0.9850, 0.9841, 0.9857, 0.9830, 0.9893, 0.9868, 0.9893, 0.9901, 0.9886, 0.9900
    ];

    const validationAccuracy = [
        0.6850, 0.7391, 0.7735, 0.8314, 0.8780, 0.8978, 0.8940, 0.9245, 0.9207, 0.9565,
        0.9512, 0.9512, 0.8841, 0.9466, 0.9481, 0.9725, 0.9764, 0.9786, 0.9748, 0.9802,
        0.9718, 0.9703, 0.9733, 0.9878, 0.9756, 0.9809, 0.9825, 0.9870, 0.9878, 0.9794
    ];

    return (
        <div className="w-full max-w-[350px] sm:max-w-[400px] mx-auto">
            <Chart
                options={{
                    chart: { type: "line", toolbar: { show: false } },
                    xaxis: {
                        categories: epochs,
                        labels: { show: false },
                    },
                    yaxis: { title: { text: "Accuracy" }, min: 0, max: 1 },
                    colors: ["#196FEB", "#D67200"],
                    legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        offsetY: 30,
                        offsetX: -50,
                        floating: false,
                        fontSize: "14px",
                        itemMargin: {
                            horizontal: 5,
                            vertical: 2,
                        },
                    },
                }}
                series={[
                    { name: "Training Accuracy", data: trainingAccuracy },
                    { name: "Validation Accuracy", data: validationAccuracy },
                ]}
                type="line"
                width="100%"
                height={400}
            />
        </div>
    )
}

export default validationAccuracy;
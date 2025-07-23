import Chart from "react-apexcharts";

const validationAccuracy = () => {
    const epochs = Array.from({ length: 31 }, (_, i) => `Epoch ${i + 1}`);
    const trainingAccuracy = [
        0.4516, 0.7354, 0.7914, 0.8310, 0.8644, 0.8885, 0.9123, 0.9145, 0.9240, 0.9346,
        0.9449, 0.9496, 0.9381, 0.9604, 0.9557, 0.9707, 0.9694, 0.9678, 0.9749, 0.9686,
        0.9691, 0.9759, 0.9788, 0.9777, 0.9828, 0.9808, 0.9820, 0.9902, 0.9927, 0.9947
    ];

    const validationAccuracy = [
        0.6804, 0.7399, 0.6331, 0.7933, 0.8185, 0.9130, 0.9115, 0.9397, 0.9329, 0.9512,
        0.9252, 0.9367, 0.9565, 0.9603, 0.9420, 0.9527, 0.9680, 0.9733, 0.9565, 0.9329,
        0.9504, 0.9825, 0.9634, 0.9718, 0.9573, 0.9756, 0.9611, 0.9840, 0.9847, 0.9878
    ];

    return (
        <div className="w-full max-w-[350px] sm:max-w-[400px] mx-auto px-2">
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
                        floating: false,
                        fontSize: "14px",
                    },
                }}
                series={[
                    { name: "Training Accuracy", data: trainingAccuracy },
                    { name: "Validation Accuracy", data: validationAccuracy },
                ]}
                type="line"
                width="100%"
                height={300}
            />
        </div>
    )
}

export default validationAccuracy;
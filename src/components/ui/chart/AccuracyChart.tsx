import Chart from "react-apexcharts";

const AccuracyChart = () => {
    const series = [99];

    return (
        <div className="w-full h-auto flex justify-center">
            <Chart
                options={{
                    chart: {
                        type: 'radialBar',
                        offsetY: 0,
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: '60%',
                            }
                        },
                    },
                    labels: ['Akurasi Model'],
                    colors: ['#196feb'],

                }}
                series={series}
                type="radialBar"
                width="100%"
                height="200%"
            />
        </div>
    );
};

export default AccuracyChart;

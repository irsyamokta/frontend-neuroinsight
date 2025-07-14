const ClassificationReport = () => {
    const report = [
        { label: "Glioma", precision: 0.98, recall: 0.98, f1: 0.98, support: 300 },
        { label: "Meningioma", precision: 0.97, recall: 0.96, f1: 0.97, support: 306 },
        { label: "Pituitary", precision: 0.98, recall: 1.00, f1: 0.99, support: 405 },
        { label: "No Tumor", precision: 0.99, recall: 0.98, f1: 0.98, support: 300 },
    ];

    return (
        <div className="overflow-x-auto mx-4 mt-6 rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Label</th>
                        <th className="px-3 py-2 text-center text-sm font-semibold text-gray-700">Precision</th>
                        <th className="px-3 py-2 text-center text-sm font-semibold text-gray-700">Recall</th>
                        <th className="px-3 py-2 text-center text-sm font-semibold text-gray-700">F1-Score</th>
                        <th className="px-3 py-2 text-center text-sm font-semibold text-gray-700">Support</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {report.map((item, i) => (
                        <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-gray-50"} 
                        >
                            <td className="px-4 py-2 text-sm text-gray-700">{item.label}</td>
                            <td className="px-4 py-2 text-xs text-center text-gray-700">{item.precision}</td>
                            <td className="px-4 py-2 text-xs text-center text-gray-700">{item.recall}</td>
                            <td className="px-4 py-2 text-xs text-center text-gray-700">{item.f1}</td>
                            <td className="px-4 py-2 text-xs text-center text-gray-700">{item.support}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassificationReport;
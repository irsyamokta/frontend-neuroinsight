const Summary = () => {
    const report = [
        { description: "Total Train Gambar", result: "5712" },
        { description: "Total Test Gambar", result: "1311" },
        { description: "Jumlah Kelas", result: "4" },
        { description: "Kelas dengan Train Terbanyak", result: "notumor (1595 gambar)" },
        { description: "Kelas dengan Train Tersedikit", result: "glioma (1321 gambar)" },
        { description: "Resolusi Unik", result: "382 jenis (contoh: [(512, 512)])" },
        { description: "Tipe Warna", result: "{'RGB': 3236, 'L': 2472, 'RGBA': 3, 'P': 1}" },
        { description: "Duplikat di Train", result: "191 file" },
        { description: "File Corrupt di Train", result: "0 file" },
    ];

    return (
        <div className="overflow-y-auto no-scrollbar h-96 lg:h-60 2xl:h-80 mx-4 rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Deskripsi</th>
                        <th className="px-3 py-2 text-center text-sm font-semibold text-gray-700">Hasil</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {report.map((item, i) => (
                        <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                            <td className="px-4 py-2 text-sm text-gray-700">{item.description}</td>
                            <td className="px-4 py-2 text-xs text-center text-gray-700">{item.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Summary;
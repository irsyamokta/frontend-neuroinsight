import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from '@react-pdf/renderer';
import logo from '../../assets/logo/logo-colored.png';
import watermark from '../../assets/img/watermark.png';

interface PredictionPDFProps {
    prediction: any;
    imageUrl: string;
    doctorNote: string;
    timestamp: string;
}

const styles = StyleSheet.create({
    page: {
        position: 'relative',
        fontSize: 12,
        fontFamily: 'Helvetica',
        color: '#1E1E1E',
        padding: 0,
    },
    backgroundWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    contentWrapper: {
        position: 'relative',
        padding: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    sectionHeader: {
        marginTop: 10,
        marginBottom: 16,
    },
    leftHeader: {
        fontSize: 10,
        fontWeight: 500,
        color: '#4B4B4B',
    },
    logo: {
        width: 130,
        height: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    // MRI Image & Diagnosis
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    leftBox: {
        width: 180,
        alignItems: 'flex-start',
    },
    leftLabel: {
        fontSize: 10,
        color: '#666',
        marginBottom: 6,
        textAlign: 'left',
    },
    imageBox: {
        width: 160,
        height: 160,
        borderRadius: 4,
        backgroundColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'hidden',
        marginTop: 4,
    },
    image: {
        width: 160,
        height: 160,
    },
    rightBox: {
        flex: 1,
        alignItems: 'flex-end',
    },
    diagLabel: {
        fontSize: 10,
        color: '#666',
        marginBottom: 4,
        textAlign: 'right',
    },
    diagValue: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: 4,
    },

    // Score Comparison
    scoreSection: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        paddingTop: 12,
        marginTop: 24,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scoreTextLeft: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    scoreTextRight: {
        fontSize: 8,
    },
    scoreLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
    },
    scoreRight: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 2,
    },
    circle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 12,
        flex: 2,
    },
    scoreLabelText: {
        fontSize: 10,
        color: '#666',
        marginBottom: 6,
    },
    circlePrimary: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 10,
        borderColor: '#196feb',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    circleSecondary: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    labelPrimary: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    labelSecondary: {
        fontSize: 9,
        textAlign: 'center',
    },

    // Insight & Catatan Dokter
    sectionInsight: {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
    },
    paragraph: {
        fontSize: 10,
        color: '#333',
        lineHeight: 1.5,
        textAlign: 'justify',
        marginTop: 4,
        paddingBottom: 10,
    },
    sectionNote: {
        marginBottom: 16,
    },
    doctorNoteBox: {
        minHeight: 120,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        padding: 8,
        marginTop: 4,
        marginBottom: 10,
    },
});

const PredictionPDF = ({ prediction, imageUrl, doctorNote, timestamp }: PredictionPDFProps) => {
    const scores = [
        { label: 'Glioma', value: prediction.probabilities.glioma },
        { label: 'Meningioma', value: prediction.probabilities.meningioma },
        { label: 'No Tumor', value: prediction.probabilities.notumor },
        { label: 'Pituitary', value: prediction.probabilities.pituitary },
    ].sort((a, b) => b.value - a.value);

    const top = scores[0];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* ✅ Background */}
                <View style={styles.backgroundWrapper}>
                    <Image src={watermark} style={styles.background} />
                </View>

                {/* ✅ Foreground Content */}
                <View style={styles.contentWrapper}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.title}>HASIL PREDIKSI DAN DIAGNOSIS</Text>
                            <Text style={{ fontSize: 10, color: '#666' }}>{timestamp}</Text>
                        </View>
                        <Image src={logo} style={styles.logo} />
                    </View>

                    {/* MRI Image & Diagnosis */}
                    <View style={styles.contentRow}>
                        <View style={styles.leftBox}>
                            <Text style={styles.leftLabel}>
                                Berdasarkan input gambar MRI berikut
                            </Text>
                            <View style={styles.imageBox}>
                                <Image src={imageUrl} style={styles.image} />
                            </View>
                        </View>
                        <View style={styles.rightBox}>
                            <Text style={styles.diagLabel}>Didapatkan diagnosa</Text>
                            <Text style={styles.diagValue}>{top.label} Tumor</Text>
                        </View>
                    </View>

                    {/* Score Comparison */}
                    <View style={styles.scoreSection}>
                        {/* Kiri: Primary Score */}
                        <View style={styles.scoreLeft}>
                            <Text style={styles.scoreLabelText}>Dengan confidence score sebesar</Text>
                            <View style={styles.circlePrimary}>
                                <Text style={styles.scoreTextLeft}>
                                    {top.value}%
                                </Text>
                            </View>
                            <Text style={styles.labelPrimary}>{top.label}</Text>
                        </View>

                        {/* Kanan: Other Scores */}
                        <View style={styles.scoreRight}>
                            <Text style={styles.scoreLabelText}>Dan perbandingan lainnya</Text>
                            <View style={styles.circle}>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.circleSecondary}>
                                        <Text style={styles.scoreTextRight}>
                                            {scores[1].value}%
                                        </Text>
                                    </View>
                                    <Text style={styles.labelSecondary}>{scores[1].label}</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.circleSecondary}>
                                        <Text style={styles.scoreTextRight}>
                                            {scores[2].value}%
                                        </Text>
                                    </View>
                                    <Text style={styles.labelSecondary}>{scores[2].label}</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.circleSecondary}>
                                        <Text style={styles.scoreTextRight}>
                                            {scores[3].value}%
                                        </Text>
                                    </View>
                                    <Text style={styles.labelSecondary}>{scores[3].label}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Insight */}
                    <View style={styles.sectionInsight}>
                        <Text style={styles.sectionTitle}>Insight Klasifikasi</Text>
                        <Text style={styles.paragraph}>
                            {prediction.information.description}
                        </Text>
                    </View>

                    {/* Doctor Notes */}
                    <View style={styles.sectionNote}>
                        <Text style={styles.sectionTitle}>Catatan Dokter</Text>
                        <View style={styles.doctorNoteBox}>
                            <Text style={styles.paragraph}>{doctorNote || '-'}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PredictionPDF;

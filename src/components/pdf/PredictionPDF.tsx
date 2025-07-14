// components/pdf/PredictionPDF.tsx
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from '@react-pdf/renderer';
import logo from '../../assets/logo/logo-colored.png';

interface PredictionPDFProps {
    prediction: any;
    imageUrl: string;
    doctorNote: string;
    timestamp: string;
}

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    logo: {
        width: 220,
        marginBottom: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'capitalize',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'medium',
    },
    image: {
        width: 200,
        height: 200,
        objectFit: 'contain',
        alignSelf: 'center',
        marginBottom: 8,
    },
    label: {
        marginTop: 10,
        marginBottom: 4,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: '#196feb',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    section: {
        marginVertical: 10,
    },
    smallText: {
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    paragraph: {
        marginTop: 5,
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
        alignItems: 'center',
    }
});

const PredictionPDF = ({ prediction, imageUrl, doctorNote, timestamp }: PredictionPDFProps) => {
    const scores = [
        { label: 'Glioma', value: prediction.probabilities.glioma },
        { label: 'Meningioma', value: prediction.probabilities.meningioma },
        { label: 'Pituitary', value: prediction.probabilities.pituitary },
        { label: 'No Tumor', value: prediction.probabilities.notumor },
    ].sort((a, b) => b.value - a.value);

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Logo */}
                <Image src={logo} style={styles.logo} />

                {/* MRI Image */}
                <Image src={imageUrl} style={styles.image} />

                <Text style={styles.smallText}>{timestamp}</Text>

                {/* Diagnosis */}
                <Text style={styles.label}>
                    Diagnosis
                </Text>

                <Text style={styles.title}>
                    {prediction.predicted_class} Tumor
                </Text>

                {/* Confidence Score */}
                <Text style={styles.label}>Confidence Score</Text>
                <View style={styles.row}>
                    {scores.map((score, idx) => (
                        <View key={idx} style={{ alignItems: 'center' }}>
                            <View style={styles.circle}>
                                <Text>{score.value.toFixed(1)}%</Text>
                            </View>
                            <Text style={styles.smallText}>{score.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Insight */}
                <View style={styles.section}>
                    <Text style={styles.subtitle}>Insight Klasifikasi</Text>
                    <Text style={styles.paragraph}>{prediction.information.description}</Text>
                </View>

                {/* Doctor Notes */}
                <View style={styles.section}>
                    <Text style={styles.subtitle}>Catatan Dokter</Text>
                    <Text style={styles.paragraph}>{doctorNote}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PredictionPDF;

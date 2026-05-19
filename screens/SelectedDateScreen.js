import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useDate } from "../context/DateContext";

export default function SelectedDateScreen() {
    const { selectedDate } = useDate();

    const dateStr = selectedDate.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const timeStr = selectedDate.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <View style={styles.container}>
            <FontAwesome6 name="calendar-check" size={64} color="#4A90E2" />

            <Text style={styles.label}>Data Selecionada</Text>
            <Text style={styles.dateText}>{dateStr}</Text>

            <View style={styles.divider} />

            <FontAwesome6 name="clock" size={32} color="#7B68EE" style={styles.icon} />
            <Text style={styles.label}>Hora Selecionada</Text>
            <Text style={styles.timeText}>{timeStr}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        backgroundColor: "#f9f9f9",
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginTop: 12,
    },
    dateText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#222",
        textAlign: "center",
    },
    timeText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#7B68EE",
    },
    divider: {
        width: "60%",
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 16,
    },
    icon: {
        marginTop: 4,
    },
});

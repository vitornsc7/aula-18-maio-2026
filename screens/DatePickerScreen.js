import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useDate } from "../context/DateContext";

export default function DatePickerScreen() {
    const { selectedDate, setSelectedDate } = useDate();
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("date");

    const onChange = (event, date) => {
        if (Platform.OS === "android") setShow(false);
        if (date) setSelectedDate(date);
    };

    const showPicker = (pickerMode) => {
        setMode(pickerMode);
        setShow(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecionar Data e Hora</Text>

            <Pressable style={styles.button} onPress={() => showPicker("date")}>
                <FontAwesome6 name="calendar-days" size={20} color="#fff" />
                <Text style={styles.buttonText}>Escolher Data</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.buttonTime]} onPress={() => showPicker("time")}>
                <FontAwesome6 name="clock" size={20} color="#fff" />
                <Text style={styles.buttonText}>Escolher Hora</Text>
            </Pressable>

            <View style={styles.preview}>
                <FontAwesome6 name="calendar-check" size={16} color="#555" />
                <Text style={styles.previewText}>
                    {selectedDate.toLocaleDateString("pt-BR")} às{" "}
                    {selectedDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                </Text>
            </View>

            {show && (
                <DateTimePicker
                    value={selectedDate}
                    mode={mode}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={onChange}
                    locale="pt-BR"
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#f9f9f9",
        gap: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#222",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4A90E2",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        gap: 10,
        width: "100%",
        justifyContent: "center",
    },
    buttonTime: {
        backgroundColor: "#7B68EE",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    preview: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 8,
        backgroundColor: "#e8e8e8",
        padding: 12,
        borderRadius: 8,
    },
    previewText: {
        fontSize: 15,
        color: "#555",
    },
});

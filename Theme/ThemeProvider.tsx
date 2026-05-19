import { createContext, useState } from "react";
import { useColorScheme } from "react-native";

interface ThemeProps {
    theme: string | null;
    setTheme: (theme: string | null) => void;
}

export const ThemeContext = createContext<ThemeProps>({
    theme: null,
    setTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
    const colorScheme = useColorScheme();

    const [themeState, setThemeState] = useState<{
        theme: string | null;
    }>({
        theme: colorScheme ?? null,
    });

    const value: ThemeProps = {
        theme: themeState.theme,
        setTheme: (theme: string | null) => setThemeState({ theme }),
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
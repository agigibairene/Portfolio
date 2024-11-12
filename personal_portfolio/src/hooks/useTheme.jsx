import { useEffect, useState } from "react";

export function useTheme(key, defaultTheme) {
    const [theme, setTheme] = useState(() => {
        try {
            const userTheme = localStorage.getItem(key);
            return userTheme ? JSON.parse(userTheme) : defaultTheme;
        } catch (err) {
            console.error("Error reading theme from localStorage:", err);
            return defaultTheme;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(theme));
        } catch (err) {
            console.error("Error saving theme to localStorage:", err);
        }
    }, [key, theme]);

    return [theme, setTheme];
}

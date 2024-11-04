import { useEffect, useState } from "react";

export function useTheme(key, defaultTheme) {
    const [theme, setTheme] = useState(()=>{
        let defaultValue;
        try{
            const userTheme = localStorage.getItem(key) || String(defaultValue)
            return userTheme;
        }
        catch(err){
            console.error(err);
            return defaultTheme; 
        }   

});

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(theme))
    }, [key, theme])

    return [theme, setTheme]
}
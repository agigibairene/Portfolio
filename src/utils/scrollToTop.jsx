import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    const { pathname} = useLocation();
    
    useEffect(()=>{
        console.log("Route changed to:", pathname);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [pathname]);
    return null;
}
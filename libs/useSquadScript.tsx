import { useEffect, useState } from "react";

const useSquadScript = () => {
    const [loaded, setLoaded] = useState<boolean>(false);
    let isMounted = true; // to prevent use effect initializing twice
    const src =  "https://checkout.squadco.com/widget/squad.min.js";

    useEffect(() => {

        const onLoad  = () => {
            setLoaded(true)
            script.removeEventListener('error', onError);
            script.removeEventListener('load', onLoad);
        };
        
        const onError = () => {
            setLoaded(false)
            script.removeEventListener('error', onError);
            script.removeEventListener('load', onLoad);
        };



        const script: HTMLScriptElement = document.createElement('script');

        const LoadScript =  (): void => {

                script.src = src;
        
                script.async = true;
            
                document.body.appendChild(script)

                script.addEventListener('load', onLoad)
        
                script.addEventListener('error', onError)
               
        }

        if(isMounted) LoadScript(); 

        return () => {
            isMounted = false;
        }
    }, [])

    return loaded;
}


export default useSquadScript;
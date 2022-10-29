import { useEffect, useState } from "react";

const useSquadScript = () => {

    const [loaded, setLoaded] = useState<boolean>(false);
    let isMounted = true; // to prevent use effect initializing twice
   
    useEffect(() => {
        function LoadScript(){
            const src =  "https://checkout.squadco.com/widget/squad.min.js";

            const script: HTMLScriptElement  = document.createElement('script');

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
            script.src = src;
            console.log(src)

    
            script.async = true;
            script.setAttribute("data-testid", "squad-script") //for testing purposes

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


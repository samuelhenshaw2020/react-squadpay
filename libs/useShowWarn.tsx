const useShowWarn = (div: HTMLDivElement | null) => {
    function showWarning(){
        div = document.createElement("div");
        div.style.padding = "0.6rem 0.6rem";
        div.style.backgroundColor = "#fff3cd";
        div.style.color = "#664d03"
        div.style.borderColor = "#ffecb5"
        div.style.borderRadius = "0.25rem"
        div.style.position = "fixed"
        div.style.width = "100%"
        div.style.top = "0px"
        div.style.textAlign = "center";
        let p = document.createElement("p");
        p.innerText = "Ooop! There seems to be an issue. please reload and try again!"
        p.style.fontWeight = "700"
        const button = document.createElement("button")
        button.innerText = "close";
        button.style.color = "#000";
        button.style.backgroundColor = "#f8f9fa";
        button.style.borderColor = "#f8f9fa";
        button.style.backgroundColor =  "transparent";
        button.style.border = "1px solid transparent";
        button.style.padding = "0.375rem 0.75rem";
        button.style.fontSize =  "1rem";
        button.style.borderRadius = "0.25rem";
        button.style.transition =  "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
        button.onclick = function(){
            div = null;
            (p as any) = null;
            (button as any) = null;
            document.body.removeChild(div as any);
        }
        div.appendChild(p)
        div.appendChild(button)
        document.body.prepend(div)
        
    }
    return showWarning;
}

export default useShowWarn
import React from "react";
import { Squad, SquadPayProps } from "./types";
import useShowWarn from "./useShowWarn";
import useSquadScript from "./useSquadScript";


declare var squad: any;

const SquadPay: React.FC<SquadPayProps> = ({children, className, text, params,  onClose, onLoad, onSuccess}) => {

    const loaded = useSquadScript();
    let div: HTMLDivElement | null = null;
    const showWarning = useShowWarn(div);

   

    function Pay() {
        if(!loaded) { 
            if(!div) showWarning()
            return;
        }
        
        const _params = {
            onClose:  onClose,
            onLoad: onLoad,
            onSuccess:  onSuccess,
            //required paramaters
            key: params.key,
            email: params.email,
            amount: params.amount * 100,
            currency_code: params.currencyCode || "NGN",
            //non required parameters
            transaction_ref: params.reference || null,
            payment_channels: params.paymentChannels || null,
            Customer_name: params.customerName || null,
            callback_url: params.callbackUrl || null,
            metadata: params.metaData || null,
            pass_charge: params.passCharge || false
        }

        const squadInstance: Squad = new squad(_params);
        squadInstance.setup();
        squadInstance.open()
         
    } 


    return (
        <button className={className} onClick={Pay}>
            {text || children}
        </button>
    )
}

export default SquadPay;
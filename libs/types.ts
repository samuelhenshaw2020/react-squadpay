

interface Metadata {
    [key: string]: any
}

type PaymentChannelsType = 'card'| 'bank' | 'ussd' | 'bank_transfer';

type CurrencyType = "NGN" | "USD";


export type Squad =  {
    setup(): void,
    open(): void
}

export interface SquadParams {
    key: string,
    email: string,
    amount: number,
    currencyCode: CurrencyType | string | null, 
    metaData?: Metadata | null,
    passCharge?: boolean | null,
    callbackUrl?: string | null,
    customerName?: string | null,
    reference?: string | null,
    paymentChannels?: PaymentChannelsType[] | null
}

export interface SquadPayProps {
    className?: string,
    text?: string,
    children?: any,
    params: SquadParams,
    onClose?(): void
    onLoad?(): void,
    onSuccess?(data: any): void
}

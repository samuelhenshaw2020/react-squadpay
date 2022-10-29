# GTCO Squad Payment React Library

[![Issues](	https://img.shields.io/github/issues/samuelhenshaw2020/react-squadpay)](https://github.com/samuelhenshaw2020/react-squadpay/issues)
[![Forks](	https://img.shields.io/github/forks/samuelhenshaw2020/react-squadpay)](https://github.com/samuelhenshaw2020/react-squadpay/network/members)
[![Stars](	https://img.shields.io/github/stars/samuelhenshaw2020/react-squadpay)](https://github.com/samuelhenshaw2020/react-squadpay/stargazers)
[![Pull Request](https://img.shields.io/github/issues-pr/samuelhenshaw2020/react-squadpay)](https://github.com/samuelhenshaw2020/react-squadpay/stargazers)
[![Stats](https://img.shields.io/github/watchers/samuelhenshaw2020/react-squadpay)](https://github.com/samuelhenshaw2020/react-squadpay/stargazers)


[Squad Payment](https://squadco.com/) is a comprehensive payments solution powered by GTCO that enables all types of businesses to make and receive payments from anywhere in the world.

**Note**: Before you proceed, signup for a Sandbox account at [Squad Sandbox platform](https://sandbox.squadco.com/sign-up) to obtain necessary public and private keys.

### Payment Modal
![](https://github.com/samuelhenshaw2020/react-squadpay/blob/main/.images/squad.png?raw=true)

## Installation
To install, run:
```bash
npm install react-squadpay 
```

## Usage


```jsx
import SquadPay from "react-squadpay"

function App() {

  const params = {
    key: "test_pk_sample-public-key-1",
    email: "example@mail.com", // from HTML form
    amount: 5000, // no need to multiply by 100 for kobo, its taken care for you
    currencyCode: "NGN"
  }

  const Close = () => {
    console.log("Widget closed")
  }

  const Load = () => {
    console.log("Widget Loaded")
  }

  /**
   * @param {object} data
   * @description  reponse when payment is successful
   */
  const Success = (data) => {
    console.log(data)
    console.log("Widget success")
  }

  return (
    <div>
        <SquadPay className='css_class_here' text='Pay now' params={params} onClose={Close} onLoad={Load} onSuccess={(res)=>Success(res)} />
    </div>
  )
}

export default App


```
  


**Note:**
 - **`amount should be the actual amount`**, that is, if payment is N1,000 enter N1000 as the amount. conversion to kobo is automatically handled.
 - There is an error notifier alert included



## Parameters
Below is a list of all the [SquadPay official supported parameters](https://squadinc.gitbook.io/squad/payments/accept-payments#parameters).

| Parameters           | Data Type                 | Required | Description                                                                                                                                                                                                                                         |
|----------------------|---------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key         | string                   | true     | This can be found on your dashboard.
| payItemID            | string                   |  true    | Your Squad public key. Use the test key found in your [Sandbox account](https://sandbox.squadco.com/) in test mode, and use the live key found in your [Squad dashboard](http://dashboard.squadco.com/) in live mode..
| email        | string                   | true     | Customer's email address.                                                                                                                                                                                                          |
| amount               | number                    | true     | The amount you are debiting customer. `(Kobo conversion is handled automatically)`                                                                                                                                                                                                          |
| currencyCode | string                    | true    | The currency you want the amount to be charged in. Allowed value is **NGN** or **USD** |
| transactionRef      | string                    |  false   |  Unique case-sensitive transaction reference. **`If you do not pass this parameter, Squad will generate a unique reference for you.`**
| paymentChannels      | string[]                    | false    | An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; `['card', 'bank' , 'ussd','bank_transfer']`.
| customerName  | string                  | false    | Name of Customer.
| callbackUrl | string                  | false   | The url you want the user to be redirected to after a transaction. sample: `https://example.com/pay-callback`
| metadata             | object                    | false    | Object that contains any additional information that you want to record with the transaction. `The custom fields` in the object will be returned via webhook and the payment verification endpoint.                                                                                                                                                 |
| passCharge         | boolean                    | false    | It takes two possible values: `true` or `false`.It is set to `false` by default. When set to `true`, the charges on the transaction is computed and passed on to the customer(payer). But when set to `false`, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.                                                                                                                                        

                         


## Response Sample

After a transaction, a sample response from the `onSuccess function` will be:
```json
{
    "Customer_name": null,
    "access_token": undefined,
    "amount": 100000,
    "auth_url": undefined,
    "callback_url": null,
    "config_meta": {
        "browser_screen_height": 948,
        "browser_screen_width": 1307
    },
    "currency_code": "NGN",
    "email": "example@mail.com",
    "formattedTransactionAmount": "1,000.00",
    "is_recurring": false,
    "key": "test_pk_sample-public-key-1",
    "merchant_id": undefined,
    "merchant_logo": undefined,
    "metadata": null,
    "pass_charge": false,
    "payment_channels": null,
    "recurring": {
        "type": 0
    },
    "transaction_amount": 100000,
    "transaction_ref": null
}
```


## SquadPay component props
Below are list of the props of the `<SquadPay />` component.

| Parameters           | Data Type                 | Required | Description                                                                                                                                                                                                                                         |
|----------------------|---------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| text         | string                   | false     | It specifies the text to display on the button.
| params        | object                  | true    | object to set squad pay parameters. `refer to parameter list above`
| onSuccess         |  function       | false    |  `Event` fires when payment is successful. it returns a `parameter` that represent the details of payment in `object` 
| onLoad         |  boolean       | false    | `Event` fires when the Payment Modal Widget loads
| onClose         |  boolean       | false    | Payment fires when the Payment Modal Widget closes

### Go Live

to go live refer to the [Squad API documentation](https://squadinc.gitbook.io/squad/payments/accept-payments#go-live) section for live payment

You can check out [Squad Documentation](https://squadinc.gitbook.io/squad/) for other guides and options.

## For Contributions
1. Fork the repo
2. Create a branch for the new feature or suggestion: `git branch feature-name`
3. Checkout to feature branch: `git checkout feature-name`
4. Commit your changes: `git commit -m "commit-type: commit-message"`. Please specify a [commit type](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages)
5. Push to the feature branch: `git push origin feature-name`
6. Submit a pull request

Thanks!

Samuel Henshaw

 ## License 
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
import {describe, expect, test, afterAll} from "vitest";
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import SquadPay from "../libs/SquadPay";
import React from "react";


afterAll(() => {
    cleanup();
    document.body.innerHTML = ""
})


describe("SquadPay", () => {

    test("if button show Pay now", () =>{
        const params = {
            key: "test_pk_sample-public-key-1",
            email: "example@mail.com", // from HTML form
            amount: 5000, // no need to multiply by 100 for kobo, its taken care for you
            currencyCode: "NGN",
            reference: Date.now().toString()
        }
        render(<SquadPay params={params} text={"Pay Now"}  />);
        expect(screen.getByText("Pay Now")).toBeDefined();

    });


});
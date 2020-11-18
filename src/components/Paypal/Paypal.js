import React, { useEffect, useRef } from 'react';

export default function Paypal( {price} ) {

    const paypal = useRef();
    console.log(price());
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking table",
                            amount: {
                                currency_code: "EUR",
                                value: `${price()}`
                            }
                        }
                    ]
                })
            },
            onApprove: async (date, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError : (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
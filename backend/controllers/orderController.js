import Order from "../models/order.js";


export function createOrder(req, res) {

    if (req.user == null) {
        res.status(401).json({
            message: "You must be logged in to create an order"
        })
        return;
    }

    const body = req.body;
    const orderData = {
        orderId: "",
        email: req.user.email,
        name: body.name,
        address: body.address,
        phoneNumber: body.phoneNumber,
        billItem: [],
        total: 0
    };

    Order.find().sort({
        date: -1
    }).limit(1).then(
        (lastBills) => {
            if (lastBills.length == 0) {
                orderData.orderId = "ORD0001";
            } else {
                const lastBill = lastBills[0];
                const lastOrderId = lastBill.orderId;
                const lastOrderNumber = lastOrderId.replace("ORD", "");
                const lastOrderNumberInt = parseInt(lastOrderNumber);
                const newOrderNumberInt = lastOrderNumberInt + 1;
                const newOrderNumberStr = newOrderNumberInt.toString().padStart(4, "0");
                orderData.orderId = "ORD" + newOrderNumberStr;
            }
            const order = new Order(orderData);
            order.save().then(() => {
                res.status(201).json({
                    message: "Order created successfully",
                    orderId: orderData.orderId
                })
            }).catch((err) => {
                console.log(err)
                res.status(500).json({
                    message: "Order creation failed"
                })
            })
        }
    )
}

export function getorders(req, res) {
    if (req.user == null) {
        res.status(401).json({
            message: "You must be logged in to get orders"
        })
        return;
    }

    if (req.user.role == "admin") {
        Order.find().then(
            (orders) => {
                res.status(200).json(orders)
            }).catch(
                (err) => {
                    console.log(err)
                    res.status(500).json({
                        message: "Failed to fetch orders"
                    })
                })
    } else {
        Order.find({
            email: req.user.email
        }).then(
            (orders) => {
                res.status(200).json(orders)
            }).catch(
                (err) => {
                    console.log(err)
                    res.status(500).json({
                        message: "Failed to fetch orders"
                    })
                }
            )
    }
}

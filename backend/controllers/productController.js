import Product from "../models/product.js";



export function createProduct(req, res) {
    if (req.user == null) {
        res.status(403).json({
            message: "login first"
        })
        return;
    }

    if (req.user.role != "admin") {
        res.status(403).json({
            message: "you are not allowed to create a product"
        })
        return;
    }

    const product = new Product(req.body);

    product.save().then(
        () => {
            res.status(201).json({
                message: "product created successfully"
            })
        }).catch((err) => {
            res.status(500).json({
                message: "product creation failed"
            })
        })

}

export function getPrducts(req, res) {
    Product.find().then(
        (products) => {
            res.status(200).json(products);
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: "product retrieval failed"
            })
        }
    )
}

export function deleteProduct(req, res) {
    if (req.user == null) {
        res.status(403).json({
            message: "login first"
        })
        return;
    }

    if (req.user.role != "admin") {
        res.status(403).json({
            message: "you are not allowed to create a product"
        })
        return;
    }

    Product.findOneAndDelete({
        productId: req.params.productId
    }).then(
        () => {
            res.status(200).json({
                message: "product deleted successfully"
            })
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: "product deletion failed"
            })
        }
    )
}

export function updateProduct(req, res) {
    if (req.user == null) {
        res.status(403).json({
            message: "login first"
        })
        return;
    }

    if (req.user.role != "admin") {
        res.status(403).json({
            message: "you are not allowed to create a product"
        })
        return;
    }

    Product.findOneAndUpdate({
        productId: req.params.productId

    }, req.body).then(
        () => {
            res.status(200).json({
                message: "product updated successfully"
            })
        }
    ).catch(
        (err) => {
            res.status(500).json({
                message: "product update failed"
            })
        }
    )
}
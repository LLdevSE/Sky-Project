import Product from "../models/product.js";

//create product function
export function createProduct(req, res) {
    if (req.user == null) {
        res.status(403).json({
            message: "You need to Login first."
        })
        return;
    }

    if (req.user.role != "admin") {
        res.status(403).json({
            message: "You are not authorized to create product."
        })
        return;
    }

    const product = new Product(req.body);
    product.save().then(
        () => {
            res.status(200).json({
                message: "Product created successfully."
            })
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "Product not created."
            })
        }
    )

}

//Read product function
export function getProducts(req, res) {
    Product.find().then(
        (products) => {
            res.status(200).json(products);
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "Products not found."
            })
        }
    )
}

//Delete product function
export function deleteProduct(req, res) {
    if (req.user == null) {
        res.status(403).json({
            message: "You need to Login first."
        })
        return;
    }
    if (req.user.role != "admin") {
        res.status(403).json({
            message: "You are not authorized to delete product."
        })
        return;
    }

    Product.findOneAndDelete({
        productId: req.params.productId
    }).then(
        () => {
            res.status(200).json({
                message: "Product deleted successfully."
            })
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "Product not deleted."
            }
            )
        })
}

//Update product function
export function updateProduct(req, res) {
    if (req.user == null) {
        res.status(403).json({
            message: "you need to login first."
        })
        return;
    }

    if (req.user.role != "admin") {
        res.status(403).json({
            message: "Yor are not authorized to update product."
        })
        return;
    }

    Product.findOneAndUpdate({
        productId: req.params.productId
    }, req.body).then(
        () => {
            res.status(200).json({
                message: "Product updated successfully."
            })
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "Product not updated."
            })
        }
    )
}
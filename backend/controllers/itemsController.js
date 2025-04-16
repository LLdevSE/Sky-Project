import Item from "../models/items.js";

export function getAllItems(req, res) {
    Item.find().then(
        (items) => {
            res.json(items);
        }
    ).catch(
        () => {
            res.json({
                message: "not found"
            })
        }
    )
}

export function saveItems(req, res) {

    if (req.user.role != "admin") {
        res.status(403).json({
            message: "Unauthorized."
        })
        return;
    }

    const item = new Item(req.body)
    item.save().then(
        () => {
            res.json({
                message: "Item saved successfully."
            })
        }
    ).catch(
        () => {
            res.json({
                message: "Item not saved."
            })
        }
    )
}

export function searchItems(req, res) {
    const itemName = req.body.name;
    Item.find(
        {
            name: itemName
        }
    ).then(
        (searchItem) => {
            res.json(searchItem);
        }
    ).catch(
        () => {
            res.json({
                message: "search ERROR."
            })
        }
    )
}
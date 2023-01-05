import prisma from "../db"


// Get all the Products for the specified user
export const getProducts = async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })

    res.json({ data: user.products })
}

// Get only one Products for the specified user

export const getOneProduct = async (req, res) => {

    const id = req.params.id;
    const product = await prisma.product.findFirst({
        where: {
            id: id,
            belongsToId: req.user.id
        }
    })

    res.json({ data: product })

}


//  Create a New Product

export const createProduct = async (req, res, next) => {
    try {
        const product = await prisma.product.create({
            data: {
                // ... data to create a Product
                name: req.body.name,
                belongsToId: req.user.id
            }
        })



        res.json({ data: product })
    }
    catch (error) {
        next(error)
    }
}

// update a Product

export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    })

    req.json({ data: updated })
}

// delete a product

export const deleteProduct = async (req, res) => {


    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }

        }
    })

    res.json({ data: deleted })
}
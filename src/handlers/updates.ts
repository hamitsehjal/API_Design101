import prisma from "../db";


export const getUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })

    /// This one's a bit confusing --> spread operator!!
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])


    res.json({ data: updates })
}

export const getOneUpdate = async (req, res) => {
    const updated = await prisma.update.findFirst({
        where: {
            id: req.params.id,
            belongsTo: req.user.id
        }
    })

    res.json({ data: updated })
}


export const createUpdate = async (req, res) => {

    const product = await prisma.product.findUnique({
        where: {
            id: req.body.id
        }
    })

    if (!product) {
        // doesn't belong to user
        return res.json({ data: "Nope" })
    }

    const update = await prisma.update.create({
        data: req.body
    })

    res.json({ data: update })



}

export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])

    const match = updates.find(update => update.id === req.params.id)

    if (!match) {
        // handle this one later
        return res.json({ message: "Nope" })
    }

    const updatedUpdate = await prisma.update.update({
        where: {
            id: req.params.id

        },
        data: req.body
    })

    res.json({ data: updatedUpdate })
}

export const deleteUpdate = async (req, res) => {

    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    })

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates]
    }, [])

    const match = updates.find(update => update.id === req.params.id)

    if (!match) {
        // handle this one later
        return res.json({ message: "Nope" })
    }

    const deletedUpdate = await prisma.update.delete({
        where: {
            id: req.params.id
        }
    })

    res.json({ data: deletedUpdate })

}
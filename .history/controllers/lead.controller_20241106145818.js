const LeadModel = require('../models/lead.model')

module.exports.getLeadById = async (id) => {
    try {
        const lead = await LeadModel.findById(id)
        if (!lead) {
            return {
                status: 404,
                error: 'Not Found',
            }
        }

        return lead
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.createLeas = async (req, res) => {
    try {
        const { name, phone, email, address, comment } = req.body
        if (!name || !phone || !email || address || comment) {
            res.status(400).send('Please add all fields')
        }

        const lead = await LeadModel.create({
            name,
            phone,
            email,
            address,
            comment,
        })
        await lead.save()

        // return {
        // status: 201,
        // error: null,
        // args: lead.toObject(),
        // }
        res.status(200).json({ lead })
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

module.exports.listLead = async (req, res) => {
    try {
        const leads = await LeadModel.find().lean()
        // return {
        // status: 200,
        // error: null,
        // args: leads,
        // }

        res.status(200).json({ leads })
    } catch (error) {
        // return { status: 500, error: 'Server Error' }
    }
}

module.exports.updateLead = async (req, res) => {
    try {
        const { name, phone, email, address, comment } = req.body
        const lead = await getLeadById(id)

        await LeadModel.findByIdAndUpdate(
            id,
            {
                name: name || lead.name,
                leadname: leadname || lead.leadname,
                role: role || lead.role,
            },
            { new: true }
        )

        // return {
        // status: 200,
        // message: 'Updated',
        // }

        res.status(200).json({ message: 'Success' })
    } catch (error) {
        // return { status: 500, error: 'Server Error' }
    }
}

module.exports.deleteLead = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            req.status(200).json({ message: 'sds' })
        }
        console.log(id)
        // await getLeadById(id)

        // await LeadModel.findByIdAndDelete(id)
        // return {
        // status: 200,
        // message: 'Lead Deleted',
        // }

        res.status(200).json({ message: 'Success' })
    } catch (error) {
        // return { status: 500, error: 'Server Error' }
        res.status(500).json({ message: error })
    }
}

// Logic For Login
module.exports.checkLoginLead = async (leadname) => {
    try {
        const lead = await LeadModel.findOne({ leadname })
        if (!lead) {
            return {
                status: 404,
                error: 'Lead not found',
            }
        }

        return lead
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

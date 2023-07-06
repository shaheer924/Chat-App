class baseController {
    model
    constructor(model) {
        this.model = model;
    }

    getAllData = async (req, res) => {
        try {
            let data = await this.model.find()

            this.responseBody("Records fetched successfully", data, res)
        } catch (e) {
            return next(new AppError(e.message, 500))
        }
    }

    createData = async (req, res) => {
        this.responseBody("Record created successfully", {}, res, 201)
    }

    createManyData = async (req, res) => {
        this.responseBody("Records created successfully", {}, res, 201)
    }

    updateData = async (req, res) => {
        try {
            let data = await this.model.update(req.params.id, req.body)
            this.responseBody("Record updated successfully", {}, res)

        } catch (e) {
            return next(new AppError(e.message, 500))
        }
    }

    deleteData = async (req, res) => {
        this.responseBody("Record deleted successfully", {}, res)

    }

    deleteManyData = async (req, res) => {
        this.responseBody("Records deleted successfully", {}, res)
    }

    responseBody = (message, data, res, status = 200, meta = {}) => {
        res.status(status).json({
            message,
            meta,
            success: true,
            data,
        })
    }
}

module.exports = baseController
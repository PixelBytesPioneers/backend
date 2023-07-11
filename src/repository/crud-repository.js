class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            conosole.log(`\n\n\n\n\nDATA IN THE REPO LAYER: ${data}\n\n\n\n\n`)
            console.log(data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(`\n\n\n\n\nDATA IN THE REPO LAYER ERROR: ${JSON.stringify(data)}\n\n\n\n\n`)
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch(error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

}

module.exports = CrudRepository;
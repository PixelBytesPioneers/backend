const User = require("../models/user");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    // async create(data) {
    //     try {
    //         const response = await this.User.create(data);
    //         return response;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;
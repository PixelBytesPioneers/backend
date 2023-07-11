const User = require("../models/user");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data) {
        try {
            const response = await this.User.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;
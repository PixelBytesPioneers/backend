const {UserRepository} = require("../repository/index.js");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            console.log(`\n\n\n\nUSER DATA IN SERVICE LAYER: ${JSON.stringify(data)}\n\n\n\n`)
            // jsonData = {
            //     name: data.name,
            //     email: data.email,
            //     password: data.password
            // }
            // const user = await this.userRepository.create(jsonData);
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data) {
        try {
            const user = this.getUserByEmail(data.email);
            if (!user) {
                throw {
                    message: 'no user found',
                };
            }
            if(!user.comparePassword(data.password)) {
                 throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;
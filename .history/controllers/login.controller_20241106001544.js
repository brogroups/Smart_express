module.exports.listUser = async (event, args) => {
    try {
        const users = await UserModel.find().exec()

        return {
            status: 200,
            error: null,
            args: users,
        }
    } catch (error) {
        return { status: 500, error: 'Server Error' }
    }
}

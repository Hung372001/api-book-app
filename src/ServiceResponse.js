class ServiceResponse {
    constructor({message, isError} = {}) {
        this.message = message
        this.isError = isError
    }
}
export default ServiceResponse
class HttpException extends Error {
    constructor(type, message, status) {
        super(message)
        this.type = type
        this.status = status
    }
}

// lançando exceção personalizada
try {
    throw new HttpException('teste', 'edaurdo', 200)
} catch (error) {
    console.log(error instanceof HttpException)
    console.log(error.message)
}
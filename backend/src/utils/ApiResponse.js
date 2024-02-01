class ApiResponse{
  constructor(data, message, statusCode){
    this.success = statusCode < 400,
    this.data = data
    this.message  = message,
    this.statusCode = statusCode
  }
}

export default ApiResponse
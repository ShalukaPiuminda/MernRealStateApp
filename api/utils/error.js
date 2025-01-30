export const errorHandler=(statusCode,message)=>{
  const error=new Error(statusCode,message);
  error.statusCode=statusCode;
  error.message=message;
  return error;
}
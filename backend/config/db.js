import mongoose from "mongoose"

export const dataBase = async () => {
    try {
        const res =  await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
        console.log(`DB Connected`);
    } catch (error) {
        console.log("error",  error); 
    }
}
import mongoose from "mongoose"

export const dataBase = async () => {
    try {
        const res =  await mongoose.connect("mongodb://localhost:27017/myapp");
        console.log(`DB Connected ${res}`);
    } catch (error) {
        console.log("error",  error); 
    }
}
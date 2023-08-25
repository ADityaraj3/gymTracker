import mongoose from "mongoose";
import { number } from "prop-types";

const objectSchema = mongoose.Schema({
    exercise: {
        type: String,
        required: true,
    },
    weight: {
        type: number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    reps: {
        type:number,
        required: true,
    },
},{
     timestamps: true 
});

const Obj = mongoose.model("object",objectSchema);

export default Obj;

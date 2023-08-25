import mongoose from "mongoose";

const objectSchema = mongoose.Schema({
    exercise: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
},{
     timestamps: true 
});

const Obj = mongoose.model("object",objectSchema);

export default Obj;

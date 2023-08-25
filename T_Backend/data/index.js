import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
]

export const objs =  [
{    
    _id: userIds[0],
    exercise: "Push-up",
    weight: 0,
    type: "Strength",
    reps: 15,
},
{
    _id: userIds[1],
    exercise: "Push-up",
    weight: 0,
    type: "Strength",
    reps: 15,
},
{
    _id: userIds[2],
    exercise: "Push-up",
    weight: 0,
    type: "Strength",
    reps: 15,
},
{
    _id: userIds[3],
    exercise: "Push-up",
    weight: 0,
    type: "Strength",
    reps: 15,
}
]
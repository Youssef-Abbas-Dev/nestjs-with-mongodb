import mongoose, { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Master } from "../masters/master.schema";

@Schema({ timestamps: true })
export class Lesson extends Document {
   @Prop({ type: String, isRequired: true })
   name: string;

   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Master.name, isRequired: true })
   master: Master;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
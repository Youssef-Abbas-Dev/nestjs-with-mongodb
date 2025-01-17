import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { DegreeType } from "./degree.enum";

@Schema()
export class Master extends Document {
  @Prop({ type: String, isRequired: true, minlength: 2, maxlength: 150 })
  firstName: string;

  @Prop({ type: String, isRequired: true })
  lastName: string;

  @Prop({ type: Number, isRequired: true, min: 30, max: 70 })
  age: number;

  @Prop({ type: String, isRequired: true, unique: true })
  email: string;

  @Prop({ type: Boolean, default: false })
  isAcademic: boolean;

  @Prop({ type: String, isRequired: true, enum: DegreeType })
  degree: DegreeType;
}

export const MasterSchema = SchemaFactory.createForClass(Master);
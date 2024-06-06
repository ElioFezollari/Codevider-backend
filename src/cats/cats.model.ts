import * as mongoose from 'mongoose'
import { Levels } from 'src/enums'
import { Size  } from 'src/enums'
import { IsNumber,IsString,IsEnum,IsBoolean, IsOptional,IsUrl } from 'class-validator'
export const CatSchema = new mongoose.Schema({
    breed:{type:String,required:true,unique:true},
    origin:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,require:true},
    size:{type:String,enum:['Extra Small','Small','Medium','Large','Extra', 'Large'],default:'Medium'},
    averageLifeSpan:Number,
    coatColors:[String],
    coatColorHex:[String],
    averageWeightKg:Number,
    activityLevel:{type:String,enum:['Low','Average','High']},
    groomingNeeds:{type:String,enum:['Low','Average','High']},
    socializationNeeds:{type:String,enum:['Low','Average','High']},
    healthIssues:{type:String,enum:['Low','Average','High']},
    intelligenceLevel:{type:String,enum:['Low','Average','High']},
    childFriendly:Boolean,
    history:String,
})

export class CreateCatDto {
    @IsString({message:'Please enter a valid breed name'})
    breed: string;

    @IsString({message:'Please enter a valid origin'})
    origin: string;

    @IsString({message:'Please enter a valid description'})
    description: string;
    
    @IsOptional()
    @IsEnum(Size)
    size: Size;

    @IsUrl()
    imageUrl:string;

    @IsOptional()
    @IsNumber()
    averageLifeSpan: number;

    @IsOptional()
    coatColors: string[];

    @IsOptional()
    coatColorHex: string[];

    @IsOptional()
    @IsNumber()
    averageWeightKg: number;

    @IsOptional()
    @IsEnum(Levels)
    activityLevel: Levels;

    @IsOptional()
    @IsEnum(Levels)
    groomingNeeds: Levels;

    @IsOptional()
    @IsEnum(Levels)
    socializationNeeds: Levels;

    @IsOptional()
    @IsEnum(Levels)
    healthIssues: Levels;

    @IsOptional()
    @IsEnum(Levels)
    intelligenceLevel: Levels;

    @IsOptional()
    @IsBoolean()
    childFriendly: boolean;

    @IsOptional()
    @IsString()
    history: string;
}

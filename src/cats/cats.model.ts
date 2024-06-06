import * as mongoose from 'mongoose'
import { Levels } from 'src/enums'
import { Size  } from 'src/enums'
import { IsNotEmpty,IsNumber,IsString,IsEnum,IsArray,IsBoolean, IsOptional } from 'class-validator'
export const CatSchema = new mongoose.Schema({
    breed_name:{type:String,required:true,unique:true},
    origin:{type:String,required:true},
    description:{type:String,required:true},
    size:{type:String,enum:['Extra Small','Small','Medium','Large','Extra', 'Large'],default:'Medium'},
    average_life_span:Number,
    coat_colors:[String],
    coat_color_hex:[String],
    average_weight_kg:Number,
    activity_level:{type:String,enum:['Low','Average','High']},
    grooming_needs:{type:String,enum:['Low','Average','High']},
    socialization_needs:{type:String,enum:['Low','Average','High']},
    health_issues:{type:String,enum:['Low','Average','High']},
    intelligence_level:{type:String,enum:['Low','Average','High']},
    child_friendly:Boolean,
    history:String,
})

export class CreateCatDto {
    @IsString({message:'Please enter a valid breed name'})
    breed_name: string;

    @IsString({message:'Please enter a valid origin'})
    origin: string;

    @IsString({message:'Please enter a valid description'})
    description: string;
    
    @IsOptional()
    @IsEnum(Size)    
    size: Size;

    @IsOptional()
    @IsNumber()
    average_life_span: number;

    @IsOptional()
    coat_colors: string[];

    @IsOptional()
    coat_color_hex: string[];

    @IsOptional()
    @IsNumber()
    average_weight_kg: number;

    @IsOptional()
    @IsEnum(Levels)
    activity_level: Levels;

    @IsOptional()
    @IsEnum(Levels)
    grooming_needs: Levels;

    @IsOptional()
    @IsEnum(Levels)
    socialization_needs: Levels;

    @IsOptional()
    @IsEnum(Levels)
    health_issues: Levels;

    @IsOptional()
    @IsEnum(Levels)
    intelligence_level: Levels;

    @IsOptional()
    @IsBoolean()
    child_friendly: boolean;

    @IsOptional()
    @IsString()
    history: string;
}

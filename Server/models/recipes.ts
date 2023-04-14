import {prop, getModelForClass} from '@typegoose/typegoose';


// create model from class
class Recipes {

    @prop({required: true})
    public name?: string;

    @prop({required: true})
    public category?: [string];

    @prop({required: true})
    public amount?: number;

    @prop({required: true})
    public image?: string;

    @prop({required: true})
    public requiredMaterials?: [string];
}

export const RecipeModel = getModelForClass(Recipes);
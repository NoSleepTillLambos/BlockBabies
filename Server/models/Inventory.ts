import {prop, getModelForClass} from '@typegoose/typegoose';


// create model from class
class Inventory {

    @prop({required: true})
    public name?: string;

    @prop({required: true})
    public category?: string;

    @prop({required: true})
    public height?: string;

    @prop({required: true})
    public type?: string;

}

export const InventoryModel = getModelForClass(Inventory);
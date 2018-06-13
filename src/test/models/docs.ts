import * as mongoose from 'mongoose';
import * as tg from '../../typegoose';
import { Person } from "./person";

export class Docs extends tg.Typegoose {
	@tg.prop()
	num: string;

	@tg.prop({ ref: Person, refType: 'string' })
	owner?: tg.Ref<Person, string>;

	@tg.arrayProp({itemsRef: Person, refType: 'string'})
	people?: tg.Ref<Person, string>[];
}

export const model = new Docs().getModelForClass(Docs);

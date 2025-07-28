import Joi from "joi";

const bookSchema = Joi.object({
  bookname: Joi.string().required(),
  writter: Joi.string().required(),
  published: Joi.string().required(),
  ratting: Joi.string().required(),
});
export{
    bookSchema
}
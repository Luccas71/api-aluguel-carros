import { Router } from "express";
import { createCAtegoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

export const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
    return createCAtegoryController.handle(request, response)
});

categoriesRouter.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
})

/**criar router 
 * instanciar o repositorio
 * criar o metodo http
 * receber name e description pelo body
 * criar o serviço e receber o repositorio como arg
 * chamar a function execute e passar name e description como arg
 * retornar status(201) e send()
 */


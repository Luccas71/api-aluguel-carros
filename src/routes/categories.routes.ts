import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCAtegoryController } from "../modules/cars/useCases/createCategory";

export const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
    return createCAtegoryController.handle(request, response)
});

categoriesRouter.get("/", (request, response) => {
    const all = categoriesRepository.list()

    return response.json(all)
})

/**criar router 
 * instanciar o repositorio
 * criar o metodo http
 * receber name e description pelo body
 * criar o serviço e receber o repositorio como arg
 * chamar a function execute e passar name e description como arg
 * retornar status(201) e send()
 */


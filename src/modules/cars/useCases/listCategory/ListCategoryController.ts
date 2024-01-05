import { Request, Response } from "express";
import { ListCategotyUseCase } from "./ListCategoryUseCase";


export class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategotyUseCase) { }
    handle(request: Request, response: Response) {
        const all = this.listCategoryUseCase.execute();

        return response.json(all)
    }

}


/**UseCase chama o repositorio
 * Controller chama o UseCase
 */
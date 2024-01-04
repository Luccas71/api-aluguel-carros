import { CategoriesRepository } from "../../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}


/**[x] - Definir retorno  */
/**[x] - Alterar retorno de erro  */
/**[x] - Acessar repositorio  */

export class CreateCategoryUseCase {
    //acessando repositorio
    constructor(private categoriesRepository: CategoriesRepository) { }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            //tratamento do erro
            throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description })
    }
}

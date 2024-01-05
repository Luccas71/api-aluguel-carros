import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


export class ListCategotyUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }
    execute(): Category[] {
        const categories = this.categoryRepository.list()
        return categories;
    }
}
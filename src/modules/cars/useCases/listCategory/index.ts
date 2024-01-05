import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategotyUseCase } from "./ListCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategotyUseCase(categoryRepository);
export const listCategoryController = new ListCategoryController(listCategoryUseCase);
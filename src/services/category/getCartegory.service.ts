import { AppDataSource } from "../../database";
import { Category } from "../../models/category.entity";

const getCartegoryService = async (): Promise<Category[] | null> => {
    try {
        const categoryRepository = AppDataSource.getRepository(Category)
        const response = await categoryRepository.find()

        return response

    } catch (_) {
        return null
    }
}

export default getCartegoryService
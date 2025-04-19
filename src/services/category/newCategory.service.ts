import { AppDataSource } from "../../database"
import { Category } from "../../models/category.entity"

const newCategoryService = async (category: string): Promise<string | Category> => {
    try {
        const categoryRepository = AppDataSource.getRepository(Category)
        const categoryExist = await categoryRepository.findOne({ where: { nameCategory: category } })
        if (categoryExist) return 'la Categoria ya existe'

        const newCategory = await categoryRepository.create()
        newCategory.nameCategory = category
        await categoryRepository.save(newCategory)

        return newCategory
    } catch (_) {
        return 'ha ocurrido un error'
    }
}

export default newCategoryService
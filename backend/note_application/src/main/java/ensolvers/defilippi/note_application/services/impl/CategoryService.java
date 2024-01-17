package ensolvers.defilippi.note_application.services.impl;

import ensolvers.defilippi.note_application.dto.category.queries.CategoryVm;
import ensolvers.defilippi.note_application.models.Category;
import ensolvers.defilippi.note_application.repositories.CategoryRepository;
import ensolvers.defilippi.note_application.services.ICategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CategoryVm> getCategories() {
        List<Category> categoryList = categoryRepository.findAll();

        List<CategoryVm> categoryVmList = categoryList.stream().map(
                category -> modelMapper.map(category, CategoryVm.class)
        ).toList();

        return categoryVmList;
    }
}

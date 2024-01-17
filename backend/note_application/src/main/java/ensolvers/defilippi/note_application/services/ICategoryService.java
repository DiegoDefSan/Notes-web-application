package ensolvers.defilippi.note_application.services;

import ensolvers.defilippi.note_application.dto.category.queries.CategoryVm;

import java.util.List;

public interface ICategoryService {
    List<CategoryVm> getCategories();
}

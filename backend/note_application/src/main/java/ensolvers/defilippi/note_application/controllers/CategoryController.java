package ensolvers.defilippi.note_application.controllers;

import ensolvers.defilippi.note_application.dto.category.queries.CategoryVm;
import ensolvers.defilippi.note_application.services.impl.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/v1/notes/categories") // http://localhost:8080//api/v1/notes/categories
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryVm>> getCategories() {
        List<CategoryVm> categoriesFromService = categoryService.getCategories();

        return new ResponseEntity<>(categoriesFromService, HttpStatus.OK);
    }
}

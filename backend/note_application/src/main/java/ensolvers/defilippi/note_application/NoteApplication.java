package ensolvers.defilippi.note_application;

import ensolvers.defilippi.note_application.models.Category;
import ensolvers.defilippi.note_application.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class NoteApplication implements org.springframework.boot.CommandLineRunner {

	@Autowired
	private CategoryRepository categoryRepository;

	private void initCategoryList() {
		List<Category> categoryList = new ArrayList<>(
				List.of(
						new Category("University"),
						new Category("Work"),
						new Category("Family")
				)
		);

		categoryRepository.saveAll(categoryList);
	}

	@Override
	public void run(String... args) throws Exception {
		initCategoryList();
	}

	public static void main(String[] args) {
		SpringApplication.run(NoteApplication.class, args);
	}
}

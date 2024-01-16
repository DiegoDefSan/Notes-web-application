package ensolvers.defilippi.note_application.repositories;

import ensolvers.defilippi.note_application.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}

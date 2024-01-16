package ensolvers.defilippi.note_application.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorMessage {
    private int statucCode;
    private String message;
    private String description;
    private LocalDateTime timestamp;
}

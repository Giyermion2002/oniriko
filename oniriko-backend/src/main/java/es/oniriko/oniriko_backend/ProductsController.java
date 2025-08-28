package es.oniriko.oniriko_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController("oniriko")
public class ProductsController {

    @GetMapping("/products")
    Map<String, String> getProducts() {
        return Map.of("hola", "mundo");
    }

}

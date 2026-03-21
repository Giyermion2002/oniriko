package es.oniriko.oniriko_backend;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*")
public class PaymentController {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;

    @Value("${frontend.url}")
    private String frontendUrl;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeSecretKey;
    }

    @PostMapping("/create-checkout-session")
    public Map<String, String> createCheckoutSession(@RequestBody Map<String, Object> data) {
        Map<String, String> response = new HashMap<>();

        try {
            // Podríamos obtener los datos del frontend (email, etc) si fuera necesario
            // pero para el MVP del bono de 25€ es suficiente
            SessionCreateParams params = SessionCreateParams.builder()
                    .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setSuccessUrl(frontendUrl + "/brunch?success=true")
                    .setCancelUrl(frontendUrl + "/brunch?cancelled=true")
                    .addLineItem(
                            SessionCreateParams.LineItem.builder()
                                    .setQuantity(1L)
                                    .setPriceData(
                                            SessionCreateParams.LineItem.PriceData.builder()
                                                    .setCurrency("eur")
                                                    .setUnitAmount(2500L) // 25.00 EUR
                                                    .setProductData(
                                                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                    .setName("Bono BRUNCH - Oníriko Specialty Coffee")
                                                                    .setDescription(
                                                                            "Experiencia Oníriko completa para una persona")
                                                                    .build())
                                                    .build())
                                    .build())
                    .build();

            Session session = Session.create(params);
            response.put("url", session.getUrl());

        } catch (StripeException e) {
            response.put("error", e.getMessage());
        }

        return response;
    }
}

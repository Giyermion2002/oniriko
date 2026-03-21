import { useTranslation } from "react-i18next";
import { TextField, Button, Box, Typography, Container, Paper, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./BrunchBonos.scss";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BrunchBonos = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: "",
        email: ""
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('success')) {
            setShowSuccess(true);
        }
        if (searchParams.get('cancelled')) {
            setErrorMsg(t("brunch.payment.cancelled"));
            setShowError(true);
        }
    }, [searchParams, t]);

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSuccess(false);
        setShowError(false);
    };

    const handlePayment = async (method: string) => {
        try {
            // En una implementación real con el backend levantado:
            const response = await fetch('/api/payments/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    method: method,
                    email: formData.email,
                    fullName: formData.fullName
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                setErrorMsg(data.error || t("brunch.payment.not_available"));
                setShowError(true);
            }
        } catch (err) {
            console.error("Error creating payment session:", err);
            setErrorMsg(t("brunch.payment.not_available"));
            setShowError(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "fullName") {
            // Permitir letras (incluyendo acentos), espacios y guiones
            const filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-]/g, "");
            setFormData(prev => ({ ...prev, [name]: filteredValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Aquí se podría añadir la lógica para enviar el correo o guardar en base de datos
        // Usamos también el snackbar para el envío normal
        setShowSuccess(true);
    };

    return (
        <Container maxWidth="sm" className="brunch-bonos-page">
            <Paper elevation={0} className="brunch-card glassmorphism">
                <Typography variant="h3" className="brunch-title">
                    {t("brunch.title")}
                </Typography>
                <Typography variant="body1" className="brunch-description">
                    {t("brunch.description")}
                </Typography>

                <form onSubmit={handleSubmit} className="brunch-form">
                    <Box className="form-container">
                        <TextField
                            fullWidth
                            label={t("brunch.form.fullName")}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            className="brunch-field"
                        />
                        <TextField
                            fullWidth
                            type="email"
                            label={t("brunch.form.email")}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            className="brunch-field"
                        />

                        <Box className="price-summary">
                            <Typography variant="h4" className="price-amount">
                                {t("brunch.form.price")}
                            </Typography>
                            <Box className="payment-methods">
                                <span className="method-badge">VISA</span>
                                <span className="method-badge">Mastercard</span>
                                <span className="method-badge">Apple Pay</span>
                                <span className="method-badge">Google Pay</span>
                            </Box>
                            <Typography variant="caption" className="secure-notice">
                                <LockOutlinedIcon className="secure-icon" />
                                {t("brunch.form.secure_payment")}
                            </Typography>
                        </Box>

                        <Box className="digital-wallets">
                            <Button
                                variant="contained"
                                className="apple-pay-btn wallet-btn"
                                onClick={() => handlePayment('apple_pay')}
                                startIcon={<AppleIcon />}
                            >
                                Pay
                            </Button>

                            <Button
                                variant="contained"
                                className="google-pay-btn wallet-btn"
                                onClick={() => handlePayment('google_pay')}
                                startIcon={<GoogleIcon />}
                            >
                                Pay
                            </Button>

                            <Button
                                variant="contained"
                                className="card-pay-btn wallet-btn"
                                onClick={() => handlePayment('card')}
                                startIcon={<CreditCardIcon />}
                                fullWidth
                            >
                                {t("brunch.form.pay_card") || "Pago con Tarjeta"}
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Paper>

            <Snackbar
                open={showSuccess}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    className="brunch-alert"
                >
                    {t("brunch.payment.success")}
                </Alert>
            </Snackbar>

            <Snackbar 
                open={showError} 
                autoHideDuration={6000} 
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleClose} 
                    severity="error" 
                    className="brunch-alert"
                >
                    {errorMsg}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default BrunchBonos;

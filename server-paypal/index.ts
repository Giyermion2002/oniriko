import express from "express";
import cors from "cors";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // sandbox
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID!;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!;

// Obtener token OAuth2 de PayPal
async function generateAccessToken() {
  const response = await axios.post(
    `${PAYPAL_API}/v1/oauth2/token`,
    "grant_type=client_credentials",
    {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
  return response.data.access_token;
}

// Endpoint para crear orden de pago
app.post("/create-order", async (req, res) => {
  try {
    const accessToken = await generateAccessToken();

    const order = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: "20.00",
            },
            description: "Camiseta Real Madrid 💎",
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(order.data);
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Error creando orden PayPal" });
  }
});

// Capturar orden
app.post("/capture-order/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const accessToken = await generateAccessToken();

    const capture = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(capture.data);
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Error capturando orden PayPal" });
  }
});

app.listen(4242, () => console.log("Servidor backend en http://localhost:4242"));

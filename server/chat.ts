import { Router } from "express";

const router = Router();

// Mock medical chatbot responses
const getMockResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("headache") || lowerMessage.includes("head pain")) {
        return "For headaches, I recommend: 1) Stay hydrated, 2) Rest in a quiet, dark room, 3) Apply a cold compress. If severe or persistent, please consult a doctor.";
    }

    if (lowerMessage.includes("fever") || lowerMessage.includes("temperature")) {
        return "For fever: 1) Rest and stay hydrated, 2) Take acetaminophen or ibuprofen as directed, 3) Monitor your temperature. Seek medical attention if fever exceeds 103°F (39.4°C) or lasts more than 3 days.";
    }

    if (lowerMessage.includes("cold") || lowerMessage.includes("cough")) {
        return "For cold/cough: 1) Get plenty of rest, 2) Drink warm fluids, 3) Use a humidifier. Most colds resolve in 7-10 days. Consult a doctor if symptoms worsen or persist.";
    }

    if (lowerMessage.includes("appointment") || lowerMessage.includes("book")) {
        return "To book an appointment, please visit our 'Doctors' page or use the 'Book Consultation' button. Our doctors are available 24/7 for video consultations.";
    }

    // Default response
    return "I understand you have a health concern. While I can provide general information, I recommend consulting with one of our certified doctors for personalized medical advice. You can book a consultation anytime!";
};

router.post("/", (req, res) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Invalid message format" });
        }

        // Get mock response (replace with actual AI integration later)
        const response = getMockResponse(message);

        res.json({ response });
    } catch (error: any) {
        console.error("Chat API error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;

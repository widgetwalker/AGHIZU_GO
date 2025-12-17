import { Router } from "express";

const router = Router();

// Comprehensive medical knowledge base
const medicalKnowledge: Record<string, { advice: string; severity: "low" | "medium" | "high" }> = {
    // Respiratory Issues
    "breathing": {
        advice: "Breathing difficulties can be serious. Try these steps:\n\n1. **Immediate**: Sit upright, loosen tight clothing\n2. **Breathing technique**: Breathe slowly through your nose, out through pursed lips\n3. **Stay calm**: Anxiety can worsen breathing\n4. **Avoid triggers**: Smoke, allergens, strong odors\n\n⚠️ **Seek immediate medical attention if**: You have chest pain, blue lips/fingernails, severe shortness of breath, or difficulty speaking.",
        severity: "high"
    },
    "asthma": {
        advice: "For asthma management:\n\n1. **Use your inhaler** as prescribed\n2. **Avoid triggers**: Dust, pollen, cold air, exercise\n3. **Monitor symptoms**: Keep a symptom diary\n4. **Stay hydrated**: Drink plenty of water\n5. **Breathing exercises**: Practice diaphragmatic breathing\n\n⚠️ If symptoms worsen or inhaler doesn't help, seek immediate care.",
        severity: "high"
    },
    "cough": {
        advice: "For cough relief:\n\n1. **Stay hydrated**: Drink warm water, herbal tea, honey-lemon water\n2. **Humidify**: Use a humidifier or breathe steam\n3. **Honey**: 1-2 teaspoons can soothe throat (not for children under 1)\n4. **Elevate head**: Sleep with extra pillows\n5. **Avoid irritants**: Smoke, strong perfumes\n\n📌 **See a doctor if**: Cough lasts >3 weeks, blood in mucus, high fever, or difficulty breathing.",
        severity: "medium"
    },

    // Pain & Headaches
    "headache": {
        advice: "Headache relief strategies:\n\n1. **Hydration**: Drink 2-3 glasses of water immediately\n2. **Rest**: Lie down in a quiet, dark room for 20-30 minutes\n3. **Cold/warm compress**: Apply to forehead or neck\n4. **Massage**: Gently massage temples and neck\n5. **Avoid triggers**: Bright lights, loud noises, screens\n6. **Pain relief**: Acetaminophen or ibuprofen as directed\n\n⚠️ **Seek immediate care if**: Sudden severe headache, vision changes, confusion, stiff neck, or headache after head injury.",
        severity: "medium"
    },
    "migraine": {
        advice: "Migraine management:\n\n1. **Dark, quiet room**: Minimize sensory input\n2. **Cold compress**: Apply to forehead for 15 minutes\n3. **Caffeine**: Small amount may help (if not a trigger)\n4. **Medication**: Take prescribed migraine medication early\n5. **Sleep**: Rest in a comfortable position\n6. **Identify triggers**: Keep a migraine diary\n\n💡 Common triggers: Stress, certain foods, hormonal changes, lack of sleep",
        severity: "medium"
    },
    "back pain": {
        advice: "Back pain relief:\n\n1. **Rest**: Avoid strenuous activity for 1-2 days\n2. **Ice/Heat**: Ice first 48 hours, then heat\n3. **Gentle stretching**: Knee-to-chest, cat-cow stretches\n4. **Posture**: Maintain good posture when sitting/standing\n5. **Pain relief**: OTC anti-inflammatory medication\n6. **Gentle movement**: Short walks to prevent stiffness\n\n⚠️ **See a doctor if**: Pain radiates down legs, numbness, loss of bladder control, or severe pain.",
        severity: "medium"
    },

    // Fever & Infections
    "fever": {
        advice: "Fever management:\n\n1. **Monitor temperature**: Check every 4 hours\n2. **Stay hydrated**: Water, clear broths, electrolyte drinks\n3. **Rest**: Get plenty of sleep\n4. **Medication**: Acetaminophen or ibuprofen (follow dosage)\n5. **Cool compress**: Apply to forehead, wrists\n6. **Light clothing**: Avoid heavy blankets\n\n🌡️ **Normal fever**: 100-102°F usually not concerning\n⚠️ **Seek care if**: Fever >103°F (39.4°C), lasts >3 days, severe headache, rash, difficulty breathing, or confusion.",
        severity: "medium"
    },
    "cold": {
        advice: "Cold symptom relief:\n\n1. **Rest**: 7-9 hours of sleep\n2. **Fluids**: Water, warm tea, chicken soup\n3. **Humidifier**: Ease congestion\n4. **Gargle**: Warm salt water for sore throat\n5. **Vitamin C**: May reduce duration\n6. **Zinc lozenges**: Within 24 hours of symptoms\n\n💊 **OTC relief**: Decongestants, pain relievers as needed\n⏱️ **Duration**: Most colds resolve in 7-10 days",
        severity: "low"
    },
    "flu": {
        advice: "Influenza care:\n\n1. **Isolate**: Stay home to avoid spreading\n2. **Rest**: Complete bed rest for first few days\n3. **Hydration**: Drink fluids every hour\n4. **Antiviral**: Contact doctor within 48 hours for prescription\n5. **Symptom relief**: Pain relievers, cough suppressants\n6. **Monitor**: Watch for worsening symptoms\n\n⚠️ **Seek immediate care if**: Difficulty breathing, chest pain, persistent vomiting, confusion, or severe weakness.",
        severity: "high"
    },

    // Digestive Issues
    "stomach": {
        advice: "Stomach discomfort relief:\n\n1. **BRAT diet**: Bananas, Rice, Applesauce, Toast\n2. **Small meals**: Eat slowly, avoid large portions\n3. **Ginger**: Tea or candied ginger for nausea\n4. **Peppermint**: Tea can soothe stomach\n5. **Avoid**: Spicy, fatty, acidic foods\n6. **Hydration**: Sip water or clear fluids\n\n⚠️ **See a doctor if**: Severe pain, blood in stool/vomit, persistent vomiting, or signs of dehydration.",
        severity: "medium"
    },
    "nausea": {
        advice: "Nausea relief:\n\n1. **Fresh air**: Open windows or go outside\n2. **Ginger**: Tea, ale, or supplements\n3. **Small sips**: Water or clear fluids\n4. **Bland foods**: Crackers, toast, rice\n5. **Avoid**: Strong smells, greasy foods\n6. **Acupressure**: Press P6 point on wrist\n\n💡 **Prevention**: Eat small, frequent meals; avoid triggers",
        severity: "low"
    },

    // Allergies
    "allergy": {
        advice: "Allergy management:\n\n1. **Identify trigger**: Keep an allergy diary\n2. **Avoid allergens**: Pollen, dust, pet dander\n3. **Antihistamines**: OTC medication as directed\n4. **Nasal rinse**: Saline spray or neti pot\n5. **Air purifier**: Use HEPA filters\n6. **Shower**: Remove allergens from hair/skin\n\n⚠️ **Seek emergency care for**: Difficulty breathing, swelling of face/throat, rapid pulse (anaphylaxis).",
        severity: "medium"
    },

    // Sleep Issues
    "insomnia": {
        advice: "Better sleep strategies:\n\n1. **Sleep schedule**: Same bedtime/wake time daily\n2. **Environment**: Dark, quiet, cool room (60-67°F)\n3. **Limit screens**: No devices 1 hour before bed\n4. **Relaxation**: Deep breathing, meditation, reading\n5. **Avoid**: Caffeine after 2 PM, heavy meals before bed\n6. **Exercise**: Regular activity, but not close to bedtime\n\n💤 **Sleep hygiene**: Use bed only for sleep, not work/TV",
        severity: "low"
    },

    // Mental Health
    "anxiety": {
        advice: "Anxiety management techniques:\n\n1. **Breathing**: 4-7-8 technique (inhale 4, hold 7, exhale 8)\n2. **Grounding**: 5-4-3-2-1 sensory exercise\n3. **Exercise**: 20-30 minutes daily\n4. **Limit caffeine**: Can worsen anxiety\n5. **Talk**: Share feelings with trusted person\n6. **Mindfulness**: Meditation, yoga\n\n💚 **Professional help**: Consider therapy if anxiety interferes with daily life.",
        severity: "medium"
    },
    "stress": {
        advice: "Stress reduction:\n\n1. **Exercise**: Physical activity releases endorphins\n2. **Time management**: Prioritize tasks, delegate\n3. **Breaks**: Take regular short breaks\n4. **Social support**: Connect with friends/family\n5. **Hobbies**: Engage in enjoyable activities\n6. **Sleep**: Maintain consistent sleep schedule\n\n🧘 **Relaxation**: Try progressive muscle relaxation, deep breathing",
        severity: "low"
    }
};

// Extract keywords from user message
function extractKeywords(message: string): string[] {
    const lowerMessage = message.toLowerCase();
    const keywords: string[] = [];

    // Check for each medical condition
    for (const keyword of Object.keys(medicalKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            keywords.push(keyword);
        }
    }

    return keywords;
}

// Generate intelligent response
function generateResponse(userMessage: string): { response: string; showBooking: boolean } {
    const keywords = extractKeywords(userMessage);

    if (keywords.length === 0) {
        // No specific medical keywords found
        return {
            response: "I understand you have a health concern. Could you please provide more details about your symptoms? For example, are you experiencing pain, fever, breathing difficulties, or other specific symptoms?",
            showBooking: false
        };
    }

    // Use the first matched keyword (most relevant)
    const primaryKeyword = keywords[0];
    const medicalInfo = medicalKnowledge[primaryKeyword];

    let response = medicalInfo.advice;

    // Add booking recommendation for high severity issues
    const showBooking = medicalInfo.severity === "high";

    if (showBooking) {
        response += "\n\n🏥 **This condition may require professional medical attention. I recommend booking a consultation with one of our certified doctors for personalized care.**";
    } else if (medicalInfo.severity === "medium") {
        response += "\n\n💡 **If symptoms persist or worsen, please book a consultation with our doctors for proper diagnosis and treatment.**";
    }

    return { response, showBooking };
}

router.post("/", (req, res) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Invalid message format" });
        }

        const { response, showBooking } = generateResponse(message);

        res.json({ response, showBooking });
    } catch (error: any) {
        console.error("Chat API error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;

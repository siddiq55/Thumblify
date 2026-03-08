import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 AI Thumbnail/mo",
            "Basic Templates",
            "Standard Resolution",
            "No Watermark",
            "Email support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited AI Thumbnails",
            "Premium Templates",
            "High Resolution",
            "Custome Fonts",
            "Brand Kit Analysis",
            "No Watermark",
            "Priority support"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Unlimited AI Thumbnails",
            "Premium Templates",
            "High Resolution",
            "No Watermark",
            "Dedicated support"
        ],
        mostPopular: false
    },

];
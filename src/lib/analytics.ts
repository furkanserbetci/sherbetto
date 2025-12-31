// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// E-commerce tracking events
export const trackAddToCart = (productName: string, price: number) => {
  event({
    action: "add_to_cart",
    category: "ecommerce",
    label: productName,
    value: price,
  });
};

export const trackPurchase = (orderId: string, total: number) => {
  event({
    action: "purchase",
    category: "ecommerce",
    label: orderId,
    value: total,
  });
};

export const trackSearch = (searchTerm: string) => {
  event({
    action: "search",
    category: "engagement",
    label: searchTerm,
  });
};

export const trackProductView = (productName: string) => {
  event({
    action: "view_item",
    category: "ecommerce",
    label: productName,
  });
};

export const trackWhatsAppClick = (source: string) => {
  event({
    action: "whatsapp_click",
    category: "engagement",
    label: source,
  });
};

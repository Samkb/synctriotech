declare global {
  interface Window {
    SyncTrioRest: {
      api_base_url: string;
    };
  }
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  queryType: string;
  projectBudget: string;
  projectType: string;
}

export const sendContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch(window.SyncTrioRest.api_base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    return await response.json();
  } catch (error) {
    console.error("Form submission error:", error);
    throw error;
  }
};

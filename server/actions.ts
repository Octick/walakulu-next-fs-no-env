"use server";

export const getSuccessMessage = async () => {
  try {
    const successMessage = "Next.js full-stack App";
    if (!successMessage) {
      return "Failed to get the success message form env";
    }
    return successMessage + " - Server action";
  } catch (error) {
    return error;
  }
};

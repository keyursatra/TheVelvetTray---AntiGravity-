'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function saveInquiry(data: any) {
  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        companyName: data.companyName,
        email: data.email,
        quantity: data.quantity,
        budget: data.budget || "Not Specified",
        occasion: data.occasion,
        requirements: data.requirements || "No special requirements",
        status: "PENDING"
      },
    });
    return { success: true, id: inquiry.id };
  } catch (error) {
    console.error("Failed to save inquiry:", error);
    return { success: false, error: "Database error" };
  }
}

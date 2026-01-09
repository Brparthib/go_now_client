export type UserFormData = {
  fullName: string;
  email: string;
  password: string;
};

export type FieldErrorType = { field: string; message: string };

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface TravelPlan {
  _id: string;
  destinationCountry: string;
  destinationCity?: string;
  startDate: string;
  endDate: string;
  budget?: number;
  interests?: string[];
  createdAt: string;
}

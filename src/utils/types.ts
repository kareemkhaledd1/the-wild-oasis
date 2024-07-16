export interface cabin {
  [key: string]: any;
  id: number;
  maxCapacity: number;
  name: string;
  regularPrice: number;
  discount: number;
  description: string;
  image: File | string;
}

export type cabinWithOutID = Omit<cabin, "id">;

export interface guest {
  id: number;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
}

export interface errorValidation {
  errors: {
    name?: {
      message: string;
    };
    regularPrice?: {
      message: string;
    };
    discount?: {
      message: string;
    };
    description?: {
      message: string;
    };
    maxCapacity?: {
      message: string;
    };
  };
}

export interface FormRowProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

export interface formDataProps {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: FileList | string;
}

export interface settingsProps {
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export interface guest {
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
}

export interface booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  status: string;
  guests: guest;
  cabins: cabin;
}

export type TagType = "blue" | "green" | "silver";

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
  extrasPrice: number;
  status: string;
  guests: guest;
  cabins: cabin;
}

export interface bookingDataProps {
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  hasBreakfast: boolean;
  observations: string;
  isPaid: boolean;
  guests: {
    fullName: string;
    email: string;
    country: string;
    countryFlag: string;
    nationalID: string;
  };
  cabins: cabin;
}

export interface user {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface userForm {
  fullName: string;
  user_metadata: {
    fullName: string;
    avatar: string;
  };
}

export type TagType = "blue" | "green" | "silver";

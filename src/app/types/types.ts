export interface Booking {
    id?: number;
    name: string;
    email: string;
    num_people: number;
    booking_date: string;
    notes?: string;
  }

  export interface Review {
    id?: number;
    customer_name: string;
    customer_job: string;
    text: string;
    picture: string;
  }
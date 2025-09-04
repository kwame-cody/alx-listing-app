export interface CardProps {
  id: string;
  title: string;
  location: string;
  distance: string;
  dateRange: string;
  tags: [string];
  price: string;
  imageUrl: string;
  rating: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

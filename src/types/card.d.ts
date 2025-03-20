// src/types/card.ts
export interface Card {
  id: string;
  views: number;
  name: string;
  position: string;
  company: string;
  contactInfo: string;
  address?: string; // Optional field
  slug?: string; // Optional field
  template: string;
  // Any other optional properties
}

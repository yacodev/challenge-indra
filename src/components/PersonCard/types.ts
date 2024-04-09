export interface PersonTypeCard {
  img: string;
  person: string;
  description: string;
  isActive: boolean;
}

export interface PersonCardProps {
  personTypeCards: PersonTypeCard[];
  selectTypePerson: (key: number) => void;
}

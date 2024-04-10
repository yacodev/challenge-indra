import { FormUser, FormUserError } from '../models/formUserModel';
import meIcon from '../assets/me-icon.svg';
import othersIcon from '../assets/others-icon.svg';

export const initialForm: FormUser = {
  typeDocument: 'DNI',
  documentNumber: '',
  phoneNumber: '',
};

export const initialErrorForm: FormUserError[] = [
  {
    field: 'documentNumber',
    isValid: true,
  },
  {
    field: 'phoneNumber',
    isValid: true,
  },
];

export const initialPersonTypeCard = [
  {
    img: meIcon,
    person: 'Para mí',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    isActive: false,
  },
  {
    img: othersIcon,
    person: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    isActive: false,
  },
];

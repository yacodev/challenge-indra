import { FormUser, FormUserError } from '../models/formUserModel';
import IcProtectionLight from '../assets/IcProtectionLight.svg';
import IcAddUserLight from '../assets/IcAddUserLight.svg';

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
    img: IcProtectionLight,
    person: 'Para mí',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    isActive: false,
  },
  {
    img: IcAddUserLight,
    person: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    isActive: false,
  },
];

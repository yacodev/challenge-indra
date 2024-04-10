import { FooterPage } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import hero from '../../assets/hero.png';
import { ChangeEvent, useReducer, FormEvent } from 'react';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import blurViolet from '../../assets/blur-asset.svg';
import blurGreen from '../../assets/blur-asset2.svg';
import { reducerForm, reducerErrorForm } from '../../utils/reducers';
import { initialForm, initialErrorForm } from '../../utils/initialValues';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../store/slices/user/userSlice';
import { API } from '../../utils/api';
import { useApi } from '../../hooks/useApi';
import './register.scss';

export const RegisterPage = () => {
  const { data, error } = useApi({ url: API.USER });
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const [stateForm, dispatchForm] = useReducer(reducerForm, initialForm);
  const [errorForm, dispatchErrorForm] = useReducer(
    reducerErrorForm,
    initialErrorForm
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!error && errorForm.every((form) => form.isValid === true)) {
      userDispatch(currentUser({ ...data, ...stateForm }));
      navigate('/offer-plan');
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    dispatchForm({
      type: 'inputChange',
      field: e.target.name,
      payload: e.target.value,
    });

    if (e.target.value.length < 8) {
      dispatchErrorForm({
        type: 'inputError',
        field: e.target.name,
        payload: e.target.value,
      });
    } else {
      dispatchErrorForm({
        type: 'inputValid',
        field: e.target.name,
        payload: e.target.value,
      });
    }
  };

  return (
    <div className='container'>
      <div className='blur-purple'>
        <img src={blurViolet} alt='fondo violeta' />
      </div>
      <div className='blur-green'>
        <img src={blurGreen} alt='fondo verde' />
      </div>
      <HeaderPage />
      <main>
        <section className='onboarding'>
          <div className='onboarding__image'>
            <img
              src={hero}
              alt='una familia feliz'
              className='onboarding_image img'
            />
          </div>
          <form className='info' onSubmit={handleSubmit}>
            <div className='info__group'>
              <div className='group__title'>
                <span className='group__title--tag'>Seguro Salud Flexible</span>
                <h1 className='group__title--text'>
                  Creado para ti y tu familia
                </h1>
              </div>
              <div className='group__image'>
                <img src={hero} alt='una familia feliz' />
              </div>
            </div>
            <div className='info__separator' />
            <p className='info__p'>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
            <div className='info__controls'>
              <div className='info__controls--group'>
                <Select hideBorderRadius={['tr', 'br']} />
                <Input
                  type='number'
                  label='Nro. de documento'
                  name='documentNumber'
                  hideBorderRadius={['tl', 'bl']}
                  hideBorder='left'
                  value={stateForm.documentNumber}
                  onChange={handleChange}
                  required
                  maxLength={8}
                />
              </div>
              {!errorForm?.find((v) => v.field === 'documentNumber')
                ?.isValid && (
                <span className='form-section__input-container--no-valid'>
                  * El DNI ingresado no es válido.
                </span>
              )}
              <div className='info__controls--input'>
                <Input
                  type='number'
                  label='Celular'
                  name='phoneNumber'
                  value={stateForm.phoneNumber}
                  onChange={handleChange}
                  required
                  maxLength={9}
                  isValidInput={
                    errorForm?.find((v) => v.field === 'phoneNumber')?.isValid
                  }
                  errorMessage='* El celular ingresado no es válido.'
                />
              </div>
            </div>
            <div className='info__terms'>
              <Checkbox label='Acepto la Política de Privacidad' id='check1' />
              <Checkbox
                label='Acepto la Política Comunicaciones Comerciales'
                id='check2'
              />
              <a
                href='https://www.google.com'
                className='info__terms--a'
                target='_blank'
              >
                Aplican Términos y Condiciones.
              </a>
            </div>
            <div>
              <Button title='Cotiza aquí' />
            </div>
          </form>
        </section>
      </main>
      <FooterPage />
    </div>
  );
};

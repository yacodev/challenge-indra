import { FooterPage } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import hero from '../../assets/hero.png';
import { useState } from 'react';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import blurViolet from '../../assets/blur-asset.svg';
import blurGreen from '../../assets/blur-asset2.svg';

import './register.scss';

export const RegisterPage = () => {
  const [nroDocument, setNroDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [checkCommunication, setCheckCommunication] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(setIsLoading);
  const handleSubmit = () => {};

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
                  name='nro_document'
                  hideBorderRadius={['tl', 'bl']}
                  hideBorder='left'
                  value={nroDocument}
                  onChange={(value) =>
                    value.length <= 8 && setNroDocument(value)
                  }
                  required
                  maxLength={8}
                />
              </div>
              <Input
                type='number'
                label='Celular'
                name='phone'
                value={phone}
                onChange={(v) => v.length <= 9 && setPhone(v)}
                required
                maxLength={9}
              />
            </div>
            <div className='info__terms'>
              <Checkbox
                label='Acepto la Política de Privacidad'
                checked={checkPrivacy}
                setChecked={setCheckPrivacy}
              />
              <Checkbox
                label='Acepto la Política Comunicaciones Comerciales'
                checked={checkCommunication}
                setChecked={setCheckCommunication}
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
              <Button title='Cotiza aquí' isLoading={isLoading} />
            </div>
          </form>
        </section>
      </main>
      <FooterPage />
    </div>
  );
};

/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiLock, FiLogIn } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErros';
import logo from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Content, Background, AnimationContainer } from './styles';

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().required('Senha é obrigatória'),
        password_confirmation: Yup.string().oneOf(
          [Yup.ref('password'), ''],
          'A senhas devem ser iguais',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Nova senha"
            />
            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirmação senha"
            />
            <Button type="submit">Resetar</Button>
          </Form>
          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;

/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiLogIn, FiMail } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErros';
import logo from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Content, Background, AnimationContainer } from './styles';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Informe um e-mail válido'),
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
            <h1>Recuperar Senha</h1>

            <Input icon={FiMail} name="email" placeholder="E-mail" />

            <Button type="submit">Recuperar</Button>

            <a href="/">Voltar ao login</a>
          </Form>

          <Link to="/signUp">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;

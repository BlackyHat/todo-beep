import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const BestForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  gap: 16px;
  color: red;
  padding: 24px 0;
`;

export const BestField = styled(Field)`
  padding: 4px 12px;
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: none;
  box-sizing: border-box;

  position: relative;
`;
export const FormErrorMsg = styled(ErrorMessage)`
  font-size: 10px;
  position: absolute;
`;
export const BestButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--button-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;
`;
export const InputItem = styled.div`
  position: relative;
`;

export const LinkGoBack = styled.a`
  margin: 0 auto;
  text-decoration: none;
  color: var(--text-color);
  font-size: 12px;
  padding: 4px 8px;
`;

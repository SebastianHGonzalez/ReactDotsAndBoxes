import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: 0;
  border-bottom: 0.1rem var(--brand-accent) solid;
  background-color: rgba(0, 0, 0, 0.02);
  margin: 0.1rem;
  cursor: unset;

  &:hover:not([readonly]) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &[type="submit"],
  &[type="button"] {
    cursor: pointer;
  }

  &[type="submit"] {
    width: 100%;
    margin: 1rem 0;
    line-height: 400%;
    font-size: xx-large !important;
    color: var(--brand-primary-text);
    background-color: var(--brand-primary);
    border: var(--brand-primary-text) 10px 10px;

    &:hover {
      background-color: var(--brand-primary-light);
    }
  }
`;

export const Label = styled.label`
  padding: 1rem;
`;

export const Button = props => <Input type="button" {...props} />;

export const FormInputGroup = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  > * {
    flex: 1 1 auto;
    flex-direction: row;
  }
`;

export const Span = styled.span`
  margin: auto;
`;

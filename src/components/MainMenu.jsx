import React from "react";
import { Formik, Form, Field } from "formik";

import { Label, Button, Input, FormInputGroup } from "components/style";

import { COLORS } from "utils/colors";

const defaultGameConfig = { players: 2, height: 8, width: 6 };

const NumberCarrousel = ({
  lowest,
  highest,
  label,
  field: { name, value, onChange }
}) => {
  const isLowest = value === lowest;
  const isHighest = value === highest;

  const decrement = () => onChange({ target: { name, value: value - 1 } });
  const increment = () => onChange({ target: { name, value: value + 1 } });

  return (
    <FormInputGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <FormInputGroup>
        <Button onClick={decrement} value="-" disabled={isLowest} />
        <Input type="number" readOnly name={name} value={value} />
        <Button onClick={increment} value="+" disabled={isHighest} />
      </FormInputGroup>
    </FormInputGroup>
  );
};

const MainMenu = ({ onGameStart }) => (
  <Formik
    initialValues={defaultGameConfig}
    onSubmit={gameConfig => onGameStart(gameConfig)}
  >
    <Form>
      <Field
        name="players"
        label="Players"
        component={NumberCarrousel}
        lowest={1}
        highest={COLORS.length}
      />
      <Field
        name="height"
        label="Board Height"
        component={NumberCarrousel}
        lowest={2}
        highest={12}
      />
      <Field
        name="width"
        label="Board Width"
        component={NumberCarrousel}
        lowest={2}
        highest={12}
      />
      <Button type="submit" value="Play" />
    </Form>
  </Formik>
);

export default MainMenu;

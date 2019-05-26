import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";

import { COLORS } from "utils/colors";

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
    <Fragment>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        <input
          type="button"
          onClick={decrement}
          value="-"
          disabled={isLowest}
        />
        <input type="number" readOnly name={name} value={value} />
        <input
          type="button"
          onClick={increment}
          value="+"
          disabled={isHighest}
        />
      </div>
    </Fragment>
  );
};

const MainMenu = ({ onGameStart }) => (
  <Formik
    initialValues={{ players: 2, height: 8, width: 8 }}
    onSubmit={onGameStart}
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
      <Field type="submit" value="Play" />
    </Form>
  </Formik>
);

export default MainMenu;

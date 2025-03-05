import { useLayoutEffect, useState } from "react";
import Modal from "../components/Modal";
import Select, { components } from "react-select";
import "../styles/ComponentsStyle.css";
import { TextField, Button, Box, Checkbox } from "@mui/material";
import MyComponent from "../components/MyComponent";
import { LoanInputContext } from "../contexts/LoanFormInputContext";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function LoanForm() {
  const userData = useContext(UserContext);
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const colourOptions = [
    {
      value: "",
      label: "Rango de Salario",
      description: "",
    },
    {
      value: "red",
      label: "Rango de Salario: 100-500",
      description: "",
    },
    {
      value: "green",
      label: "Rango de Salario: 501-1000",
      description: "",
    },
    {
      value: "blue",
      label: "Rango de Salario: mas de 1000",
      description: "",
    },
  ];
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "#0064BE" : "",

        color: isFocused ? "#F9FAFC" : "#191D2F",
        display: "flex",
        paddingLeft: 0,

        "& .left": {
          display: "flex",
          justifyContent: "center",
          width: 60,
          marginTop: 3,
        },
        "& .right": {
          width: "100%",
        },

        "& .right > .title": {
          display: "block",
          margin: "5px 0",
        },
      };
    },
  };
  const Option = (props) => {
    return (
      <components.Option {...props}>
        <div className="left">{props.isSelected ? "✔" : ""}</div>
        <div className="right">
          <strong className="title">{props.data.label}</strong>
          <div>{props.data.description}</div>
        </div>
      </components.Option>
    );
  };
  const initialName = userData.name;
  const [loanInputs, setLoanInputs] = useState({
    name: initialName,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Fromat Is Incorrect");
    }
    setShowModal(true);
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  function handleDivClick() {
    console.log("div clicked");
    if (showModal) {
      setShowModal(false);
    }
  }

  function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }
  return (
    <div>
      <h2>HTML Forms</h2>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "25%",
            paddingLeft: "38%",
          }}
        >
          <TextField label="Nombre" variant="outlined" required />
          <TextField label="Edad" variant="outlined" required />
          <TextField
            className="loanInput"
            label="Telefono"
            variant="outlined"
            type="phone"
            required
          />
          <TextField label="Email" variant="outlined" type="email" required />
          <lable>
            eres Trabajador? <Checkbox />
          </lable>

          <Select
            defaultValue={colourOptions[0]}
            label="Single select"
            options={colourOptions}
            styles={colourStyles}
            components={{
              Option,
            }}
          />

          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </Box>
      </div>
    </div>
  );
}
export default LoanForm;

import React from "react";
import {
  tableWrapper,
  CreateUserPageWrapper,
} from "./CreateUserPage.module.css";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Tbody from "../../components/Table/Tbody/Tbody";
import CloseButton from "../../components/CloseButton/CloseButton";
import { HOME_PAGE, UPDATE_USER_PAGE } from "../../navigation/routes";
import { useDispatch } from "react-redux";
import { createUserAction } from "../../redux/actions/actions";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateUserPage = ({ history }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const dispatch = useDispatch();

  const onClickRow = (id) => {
    history.push({ pathname: UPDATE_USER_PAGE, state: { id } });
  };
  const onClickCreate = () => {
    dispatch(
      createUserAction({
        id: uuidv4(),
        userName,
        firstName,
        lastName,
        email,
        type,
        password,
        passwordRepeat,
      })
    );
    history.push(HOME_PAGE);
  };
  const onClickClose = () => {
    history.push(HOME_PAGE);
  };

  return (
    <div className={CreateUserPageWrapper}>
      <div className={tableWrapper}>
        <Button text="Create User" type="button" />
        <Table>
          <Tbody onClickRow={onClickRow} />
        </Table>
      </div>
      <Form>
        <CloseButton onClick={onClickClose} type="button" />
        <Input
          type="text"
          id="userName"
          placeholder="mperry1992"
          lable="Username"
          textError=""
          setInput={setUserName}
          inputState={userName}
        />
        <Input
          type="text"
          id="firstName"
          placeholder="Mathew"
          lable="First name"
          textError=""
          setInput={setFirstName}
          inputState={firstName}
        />
        <Input
          type="text"
          id="lastName"
          placeholder="Parry"
          lable="Last name"
          textError=""
          setInput={setLastName}
          inputState={lastName}
        />
        <Input
          type="email"
          id="email"
          placeholder="mperry1992@mail.com"
          lable="Email"
          textError=""
          setInput={setEmail}
          inputState={email}
        />
        <Input
          type="text"
          id="type"
          placeholder="Driver"
          lable="Type"
          textError=""
          setInput={setType}
          inputState={type}
        />
        <Input
          type="password"
          id="password"
          placeholder="********"
          lable="Password"
          textError=""
          setInput={setPassword}
          inputState={password}
        />
        <Input
          type="password"
          id="passwordRepeat"
          placeholder="********"
          lable="Repeat password"
          textError=""
          setInput={setPasswordRepeat}
          inputState={passwordRepeat}
        />
        <Button onClick={onClickCreate} type="button" text="Create" />
      </Form>
    </div>
  );
};

export default CreateUserPage;

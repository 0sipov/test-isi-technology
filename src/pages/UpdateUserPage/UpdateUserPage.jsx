import React, { useState } from "react";
import {
  tableWrapper,
  updateUserPageWrapper,
  buttonsFormWrapper,
} from "./UpdateUserPage.module.css";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Tbody from "../../components/Table/Tbody/Tbody";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import {
  CREATE_USER_PAGE,
  HOME_PAGE,
  UPDATE_USER_PAGE,
} from "../../navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  updateUserAction,
} from "../../redux/actions/actions";
import { v4 as uuidv4 } from "uuid";

const UpdateUserPage = ({ history }) => {
  const id = history.location.state.id;
  const preStateUser = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );
  const [userName, setUserName] = useState(preStateUser.userName);
  const [firstName, setFirstName] = useState(preStateUser.firstName);
  const [lastName, setLastName] = useState(preStateUser.lastName);
  const [email, setEmail] = useState(preStateUser.email);
  const [type, setType] = useState(preStateUser.type);
  const [password, setPassword] = useState(preStateUser.password);
  const [passwordRepeat, setPasswordRepeat] = useState(
    preStateUser.passwordRepeat
  );
  const dispatch = useDispatch();
  const onClickCreateUser = () => {
    history.push(CREATE_USER_PAGE);
  };
  const onClickRow = (id) => {
    history.push({ pathname: UPDATE_USER_PAGE, state: { id } });
  };
  const onClickUpdate = () => {
    dispatch(
      updateUserAction(id, {
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
  const onClickDelete = () => {
    dispatch(deleteUserAction(id));
    history.push(HOME_PAGE);
  };
  return (
    <div className={updateUserPageWrapper}>
      <div className={tableWrapper}>
        <Button text="Create User" type="button" onClick={onClickCreateUser} />
        <Table>
          <Tbody onClickRow={onClickRow} />
        </Table>
      </div>
      <Form>
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
        <div className={buttonsFormWrapper}>
          <Button onClick={onClickDelete} type="button" text="Delete" />
          <Button onClick={onClickUpdate} type="button" text="Update" />
        </div>
      </Form>
    </div>
  );
};

export default UpdateUserPage;

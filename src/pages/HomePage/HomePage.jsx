import React from "react";
import { tableWrapper } from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Tbody from "../../components/Table/Tbody/Tbody";
import { CREATE_USER_PAGE, UPDATE_USER_PAGE } from "../../navigation/routes";
const HomePage = ({ history }) => {
  const onClickRow = (id) => {
    history.push({ pathname: UPDATE_USER_PAGE, state: { id } });
  };
  const onClickCreateUser = () => {
    history.push(CREATE_USER_PAGE);
  };
  return (
    <div className={tableWrapper}>
      <Button text="Create User" type="button" onClick={onClickCreateUser} />
      <Table>
        <Tbody onClickRow={onClickRow} />
      </Table>
    </div>
  );
};

export default HomePage;

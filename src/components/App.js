import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "redux/operations";
import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { Section } from "./Section/Section";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <Layout>
      <AppBar />
      <Section>
        <TaskForm />
        <TaskList />
      </Section>
    </Layout>
  );
};

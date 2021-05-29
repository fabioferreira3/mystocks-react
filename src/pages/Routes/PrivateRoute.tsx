import { Route } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route {...rest}>
      <MainLayout>
        <Component />
      </MainLayout>
    </Route>
  );
};

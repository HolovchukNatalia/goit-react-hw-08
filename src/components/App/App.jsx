import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefresh } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import RouteList from "../RouteList/RouteList";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      {isRefreshing && <Loader />}
      <Layout>
        <RouteList />
      </Layout>
    </>
  );
}

export default App;

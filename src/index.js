import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoaderBox from "components/LoaderBox";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.css";
import { store, persistor } from "./store";

const ToastConfig = {
	className: "toast__container",
	toastClassName: "toast__toast",
	bodyClassName: "toast__body",
	hideProgressBar: true,
	closeButton: false,
	position: toast.POSITION.TOP_CENTER,
};

// configure global toaster
toast.configure(ToastConfig);
const AdminLayout = lazy(() => import("layouts/Admin"));
const LoginPage = lazy(() => import("views/auth"));

ReactDOM.render(
	<Suspense fallback={<LoaderBox />}>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Switch>
						<Route
							path="/admin"
							render={(props) => <AdminLayout {...props} />}
						/>
						<Route path="/" component={LoginPage} />
						<Redirect to="/" />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</Suspense>,
	document.getElementById("root")
);

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useAuth() {
	const { data } = useSelector((state) => state.auth);
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!(data && data.token)
	);

	// monitor if the auth state changes
	useEffect(() => {
		setIsAuthenticated(!!(data && data.token));
	}, [data]);

	return isAuthenticated;
}

export default useAuth;

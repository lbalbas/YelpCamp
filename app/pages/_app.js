import "./app.scss";
import { AuthProvider } from './lib/authContext.js';

function MyApp({ Component, pageProps }) {
	return (
	  	<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
		);
}

export default MyApp;

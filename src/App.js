import React from "react";
import { Route, Switch } from "react-router-dom";
import TZdropdown from "./TZdropdown";
import Card from "./Card";
import PageNotFound from "./PageNotFound";
import Header from "./Header";
import Loadash from "./LoadashTask";

export default function App() {
	return (
		<>
			<div>
				<Header />

				<main>
					<Switch>
						<Route path="/" component={TZdropdown} exact />
						<Route path="/card" component={Card} />
						<Route path="/loadash" component={Loadash} />
						<Route component={PageNotFound} />
					</Switch>
				</main>
			</div>
		</>
	);
}

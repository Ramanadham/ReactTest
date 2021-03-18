import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

//Styled components
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
	border: 0.2em solid rgba(0, 0, 0, 0.1);
	border-top: 0.2em solid #767676;
	border-radius: 50%;
	width: 2.28571429rem;
	height: 2.28571429rem;
	animation: ${spin} 0.6s linear infinite;
	margin: 0 auto;
`;
const SemiLoader = styled.div`
	border: 0.2em solid rgba(0, 0, 0, 0.1);
	border-top: 0.2em solid #767676;
	border-radius: 50%;
	width: 1rem;
	height: 1rem;
	animation: ${spin} 0.6s linear infinite;
	margin: 0 auto;
`;
const Main = styled("div")`
	font-family: sans-serif;
	height: 100vh;
`;

const DropDownContainer = styled("div")`
	width: 24%;
	margin: 0 auto;
`;

const DropDownHeader = styled("div")`
	margin-bottom: 0.8em;
	padding: 0.4em 2em 0.4em 1em;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	font-weight: 500;
	font-size: 1.3rem;
	color: #3faffa;
	border: 2px solid #3faffa;
`;

const DropDownListContainer = styled("div")`
	position: absolute;
	z-index: 100;
	width: 25%;
`;

const DropDownList = styled("ul")`
	padding: 0;
	margin: 0;
	padding-left: 1em;
	background: #ffffff;
	border: 2px solid #e5e5e5;
	box-sizing: border-box;
	color: #3faffa;

	font-size: 1.3rem;
	font-weight: 500;
	height: 300px;
	overflow: auto;
	&:first-child {
		padding-top: 0.8em;
	}
`;

const ListItem = styled("li")`
	list-style: none;
	margin-bottom: 0.8em;
	&:hover {
		color: #fd9e46;
	}
`;
const Heading = styled("div")`
	position: absolute;
	font-weight: bold;
	right: 15%;
	top: 6%;
`;

//Time zone and time urls
const tzURL =
	"http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*";
const timeURL = `http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=`;

export default function TZdropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [loader, setLoader] = useState(true);
	const [semiLoader, setSemiLoader] = useState(false);
	const [options, setOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState("Select Location");
	const [zoneTime, setZoneTime] = useState("");

	// Making timezone api request on useEffect
	useEffect(() => {
		getAllTzones();
	}, []);

	// Axios api request to get all timezones
	const getAllTzones = () => {
		axios
			.get(tzURL)
			.then((response) => {
				setOptions(response.data.zones);
				setLoader(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// Toggle timzone dropdown
	const toggling = () => setIsOpen(!isOpen);

	// Onchange method of timeZone dropdown
	const onOptionClicked = (value) => () => {
		setZoneTime("");
		setSelectedOption(value);
		setIsOpen(false);
		getTime(value);
	};

	//Get time based on timezone selection
	const getTime = (zone) => {
		setSemiLoader(true);
		axios
			.get(`${timeURL}` + `${zone}`)
			.then((response) => {
				prepareTimeInterval(response.data.formatted);
				setSemiLoader(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	//Make interval to change time every 5 seconds
	const prepareTimeInterval = (dateObj) => {
		let getDate = new Date(dateObj);
		let timeObject = new Date(getDate.getTime() + 5000);
		let finalDate =
			timeObject.toLocaleDateString() + " " + timeObject.toLocaleTimeString();
		setZoneTime(finalDate);
		setTimeout(async () => {
			prepareTimeInterval(timeObject);
		}, 5000);
	};

	return (
		<Main>
			<div>
				<div>{loader && <Loader />}</div>

				<div>
					{!loader && (
						<DropDownContainer>
							<DropDownHeader onClick={toggling}>
								{selectedOption || "Select Location"}
							</DropDownHeader>
							{isOpen && (
								<DropDownListContainer>
									<DropDownList>
										{options.length > 0 &&
											options.map((option) => (
												<ListItem
													onClick={onOptionClicked(option.zoneName)}
													key={Math.random()}
												>
													{option.zoneName}
												</ListItem>
											))}
									</DropDownList>
								</DropDownListContainer>
							)}
						</DropDownContainer>
					)}
				</div>
				<div>
					{semiLoader && <SemiLoader></SemiLoader>}
					{zoneTime != "" && <Heading>Time : {zoneTime}</Heading>}
				</div>
			</div>
		</Main>
	);
}

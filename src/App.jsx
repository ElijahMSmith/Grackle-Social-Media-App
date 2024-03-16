import Post from "./Post";

const postData = [
	{
		id: 0,
		image: "https://afar.brightspotcdn.com/dims4/default/2bf2b30/2147483647/strip/true/crop/1000x637+0+0/resize/1440x917!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F7e%2F18%2F203e24c54a25880e3e516907e065%2Fshutterstock-1455531734.jpg",
		title: "My Vacation Vlog",
		author: "Also Eli Smith",
	},
	{
		id: 1,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qytC1-bCaffcTckWU1M5D0qdtcjXC5OdLQ&usqp=CAU",
		title: "Look at me pls",
		author: "Eli Smith",
	},
];

function App() {
	return (
		<div>
			{postData.map((data) => (
				<Post
					key={data.id}
					title={data.title}
					image={data.image}
					author={data.author}
				/>
			))}
		</div>
	);
}

export default App;

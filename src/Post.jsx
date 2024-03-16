/* eslint-disable react/prop-types */
function Post(props) {
	let { title, image, author } = props;

	return (
		<div style={{ border: "1px solid black" }}>
			<h3>{title}</h3>
			<h5>{author}</h5>
			<image src={image} />
			<button>Like</button>
		</div>
	);
}

export default Post;

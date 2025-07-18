import React, {useEffect, useRef, useState} from "react";

const WinGrid = () => {
	const followerRef = useRef(null);
	const [items] = useState(Array(380).fill(0));

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (followerRef.current) {
				followerRef.current.style.top = `${e.pageY - 40}px`;
				followerRef.current.style.left = `${e.pageX - 40}px`;
			}
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="win_grid">
			<div className="follower" ref={followerRef}></div>
			<div className="grid_container">
				{items.map((_, index) => (
					<div className="grid_item" key={index}></div>
				))}
			</div>
		</div>
	);
};

export default WinGrid;

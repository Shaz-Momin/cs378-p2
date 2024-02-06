import React from "react";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
	return (
		<div className="item">
			<img
				src={require(`../images/${imageName}`)}
				alt={description}
				className="itemImage"
			/>
			<div className="itemInfo">
				<h4 className="itemTitle">{title}</h4>
				<p className="itemDescription">{description}</p>
				<div className="itemFooter">
					<div className="itemPrice">${price}</div>
					<button className="itemButton">Add</button>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;

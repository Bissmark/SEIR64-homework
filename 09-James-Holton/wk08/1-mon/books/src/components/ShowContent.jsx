const ShowContent = (props) => {
    return (
        <div>
            <img src={props.books[0]} />
            <li>Author: {props.books[1]} </li>
            <li>Publisher: {props.books[2]} </li>
            <li>Publish date: {props.books[3]} </li>
            <li>description: {props.books[4]} </li>
            <li>pages: {props.books[5]} </li>
            <li>ratings: {props.books[6]} </li>
        </div>
    );
};

export default ShowContent;
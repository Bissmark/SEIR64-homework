const AboutBook = (props) => {
    return(
        <div>
        <p>Title: {props.bookTitle}</p>
        <p>Author: {props.bookAuthor}</p>
        <p>Description: {props.description}</p>
        <img src={props.bookCover} alt="" />
    </div>
    )
}

export default AboutBook
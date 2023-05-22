const ShowContent = (props) => {
    return (
        <div>
            { props.cards.map((url) => <img src={url} key={url} />) }
        </div>
    );
};

export default ShowContent;
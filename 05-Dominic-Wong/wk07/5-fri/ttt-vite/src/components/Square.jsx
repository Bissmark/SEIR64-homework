const Square = ( { value, onSquareClick } ) => {
    
    // const _handleClick = () => {
    //     setValue('X');
    // };

    // return jsx here
    return (
        <button className="square" onClick={ onSquareClick }> 
            {value} 
        </button>
    );
};

export default Square;
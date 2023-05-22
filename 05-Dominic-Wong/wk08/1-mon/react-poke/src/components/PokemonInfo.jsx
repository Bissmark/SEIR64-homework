import _ from 'lodash';

const PokemonInfo = (props) => {

    return (
        <div>
            <h1>{_(props.name).upperFirst()}</h1>
            <img src={props.image} alt= { _(props.name).upperFirst() } />
        </div>
    );
};

export default PokemonInfo;   
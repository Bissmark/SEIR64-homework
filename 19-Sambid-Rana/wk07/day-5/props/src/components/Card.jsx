import logo from "../assets/react.svg"
export default function Card(props) {
    console.log(props)
    const {img, name, rating, country} = props
    //convention is to destructure in the ( { need to be same as instance  } )
    return (

        <div>
            <img src="" alt="" />
            <div className="card-container">
                {/* <img src={logo} alt="" /> */}
                <img src={img} alt="" />
                <span> {name} </span>
                <span> {rating} </span>
                <span> {country}</span>
            </div>
        </div>
    )
}
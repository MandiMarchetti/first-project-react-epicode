
import { Component } from 'react'
// in questo Component è il più grande e generico componente REact esistente, preso direttamente, preso diretamente dalla libreria


class ImageComponent extends Component {


    render() {
        return (
            <div>
                <img className='imgReact' src={this.props.imgSrc} alt={this.props.imgAlt} />
            </div>
        )
    }
}

export default ImageComponent

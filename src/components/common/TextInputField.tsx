import '../../appstyles/common/TextInputField.scss';

export default function TextInputField ({...props}) {
    return(
        <input className="textinputfield" {...props} ></input>
    )
}
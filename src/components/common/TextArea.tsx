import '../../appstyles/common/TextArea.scss';

const TextArea =({label,...otherProps})=>{
    return(
        <div className="textarea_container">
            <label>{label}</label>
            <textarea  {...otherProps}></textarea>
        </div>
    )
}
export default TextArea;
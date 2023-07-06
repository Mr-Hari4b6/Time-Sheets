import '../../appstyles/common/CheckBox.scss';

const Checkbox = ({ label, onChange,...props }) => {

    return (
      <label className='checkbox_container'>
        <input type="checkbox" id={props.id}  onChange={onChange} {...props } />
        {label}
      </label>
    );
  };
  
  export default Checkbox;
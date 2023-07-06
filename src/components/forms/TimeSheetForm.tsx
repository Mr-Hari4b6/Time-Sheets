import TextField from "../common/TextField";
import '../../appstyles/forms/TimeSheetForm.scss';
import TextInputField from "../common/TextInputField";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import CheckBox from "../common/CheckBox";
import TextArea from "../common/TextArea";
import { timeRanges } from "../../store/timeranges";
import {createUserTimeSheetRecord} from '../../utils/firebase/firebaseutils';


function TimeSheets() {

    const defaultFields = {
      displayName:'',
      email:'',
      department:'',
      projectDetails:'',
      tasksDetails:'',
      firstHalf:'4',
      addOn:false ? 'NA' : {
        extraHours:'',
        remarks:''
      },
      secondHalf:'',
    }
    
    const [tasksData,seTasksData] = useState(defaultFields);
    const {displayName,email,department,projectDetails,tasksDetails,firstHalf,addOn,secondHalf} = tasksData;
    const [isChecked,setIsChecked] = useState(false);
    const [addOnFields,setAddOnFields] = useState({extraHours:'',remarks:''});
    const [remarks,setRemarks] = useState('');

    const handleOnChecked = (id) => {
      for (var i = 1;i <= timeRanges.length; i++)
        {
          document.getElementById(i).checked = false;
        }
        document.getElementById(id).checked = true;
        
    };
  console.log(tasksData);
    const handleChange=(event)=>{
          const {name,value} = event.target;
          if(isChecked) {
            setRemarks(value);
            seTasksData({...tasksData,[name]:setAddOnFields({...addOnFields,remarks:remarks})});
          }
          seTasksData({...tasksData,[name]:value});
    }
    const handleChecked = () => {
      setIsChecked(!isChecked);
    }
    const handleAddOnFieldCheck = (name?:any) => {
      if(isChecked) {
        setAddOnFields({...addOnFields,extraHours:name});
      }
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        seTasksData({...tasksData,addOn:addOnFields});
        console.log('tasksData',tasksData);
        try{
          const res = await createUserTimeSheetRecord(email,tasksData);
          console.log('res',res); 
         } catch(error){
           console.log('encountered error while loging in',error);
         }  
     }
 
    return(
        <Container className='timesheet_container'>
          <Row> 
            <Col xs={6} className='fields-container'>
                <img src='https://xrg.in/images/logo.svg' width={'100%'} height={'20%'} style={{textAlign:'center',marginBottom:20}}></img>
                <TextField 
                  title="XRG TimeSheets "
                  subtitle={''}
                ></TextField>
                <form onSubmit={handleSubmit} className='fields-container'> 
                  <TextInputField
                      name='displayName'
                      type='text'
                      value={displayName}
                      placeholder='Employee Name'
                      onChange={handleChange}
                  ></TextInputField>
                  <TextInputField
                      name='email'
                      value={email}
                      placeholder='Employee Email'
                      type='email'
                      onChange={handleChange}
                  ></TextInputField>
                   <TextInputField
                      name='department'
                      value={department}
                      placeholder='Department Details'
                      type='text'
                      onChange={handleChange}
                  ></TextInputField>
                  <TextInputField
                      name='projectDetails'
                      value={projectDetails}
                      placeholder='Project Details'
                      type='text'
                      onChange={handleChange}
                  ></TextInputField>
                   <TextInputField
                      name='tasksDetails'
                      value={tasksDetails}
                      placeholder='Tasks Details'
                      type='text'
                      onChange={handleChange}
                  ></TextInputField>
                  <TextInputField
                      name='firsthalf'
                      value={firstHalf}
                      disabled
                      type='number'
                      onChange={handleChange}
                  ></TextInputField>
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <CheckBox name='addOn' label={'Add On'} value={isChecked} onChange={handleChecked} /> 
                  </div>
                  {/* Additional Working Hours On FirstHals Task*/ }
                  {
                    isChecked && 
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            {
                              timeRanges.map((timeRange)=>{
                                return(
                                  <CheckBox 
                                  key={timeRange.id}
                                  label={timeRange.time} 
                                  id={timeRange.id}
                                  name='addonChecks'
                                  onChange={()=>{handleOnChecked(timeRange.id);handleAddOnFieldCheck(timeRange.time)}}
                                  />
                                )
                              })
                            }
                        </div>
                        <div>
                            <TextArea
                                name='remarks'
                                label={'Reasons For Late Task Completion ?'}
                                placeholder='Remarks Here'
                                onChange={handleChange}
                                rows={5}
                            ></TextArea>
                        </div>
                    </div>
                    
                  }
                  <TextInputField
                    value={secondHalf}
                    name='secondHalf'
                    placeholder='second half'
                    type='text'
                    onChange={handleChange}
                  ></TextInputField>
                  <button type='submit'
                    className='button-field '
                  >Submit Record</button>
                </form>  
                  
            </Col>
          </Row>
        </Container>
    )
}

export default TimeSheets;
import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../../Redux/slice/userSlice';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StudentDashboard = () => {
  
  const currentUser = JSON.parse(localStorage.getItem('studentCredentials'));

  const studentInfo = useSelector((state) => state.user.students);
  const dispatch = useDispatch();
  const [marks, setMarks] = useState(0);


  const currentStudentInfo = studentInfo?.find((e) => e.Email === currentUser?.student_mail);

  useEffect(() => {
    if(currentStudentInfo){
      setMarks(currentStudentInfo.Marks)
    }
  }, [currentUser]);

  return (
    <div className='pl-32 w-full h-fit'>
      <div className='px-3 py-4 '>
        This is the student dashboard
      </div>
    </div>
  );
}

export default StudentDashboard;

// import React, { useState } from "react";
// import './Time.sass';

// export const Time = (props) => {
//   const parentCallback = props.parentCallback;
//   let times = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
//   '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00'];
//   let times2 = times.map((item) => {return ({'name': item, 'isChecked': false})});
//   const [timeList, changeTimeList] = useState(times2);

//   const callback = (index) => {
//     changeTimeList([
//       ...timeList.map((item) => item.isChecked = false),
//       timeList[index].isChecked = true,
//     ])
//     // parentCallback();
//   }

//   return (
//     <div className='time'>
//       <p className='time__title'>Время проведения</p>
//       <div className='time__group'>
//         {
//           timeList.map((item, index) => 
//             <button key={index} className={`time__group__time-btn${item.isChecked ? '__active' : ''}`} onClick={callback(index)}>
//               {item}
//             </button>
//           )
//         }
//       </div>
//     </div>
//   );
// };
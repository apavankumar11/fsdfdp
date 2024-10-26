import React, { useState } from 'react'

const State = () => {
    const [arr,setArr] = useState([10,20,30,40,50,60]);
    const mystyle ={
        color: 'blue',
        fontSize: '20px',
        placeItems:'center'
        // textAlign: 'center'
    }
    // array of Objects
    const [employees,setEmployees] = useState([
        {e_id:111,e_name:'e-one',e_sal:25698,e_img:'https://reqres.in/img/faces/1-image.jpg'},
        {e_id:222,e_name:'e-two',e_sal:35593,e_img:'https://reqres.in/img/faces/2-image.jpg'},
        {e_id:333,e_name:'e-three',e_sal:55378,e_img:'https://reqres.in/img/faces/3-image.jpg'},
        {e_id:444,e_name:'e-four',e_sal:758956,e_img:'https://reqres.in/img/faces/4-image.jpg'},
        {e_id:555,e_name:'e-five',e_sal:985625,e_img:'https://reqres.in/img/faces/5-image.jpg'}
    ])
  return (
    <div>
        {/* {
            arr.map((element,index)=>{
                return <p key={index} style={mystyle}>{element}</p>
            })
        }       */}
        <table border={1} align='center' cellPadding={10} cellSpacing={10}>
            <thead style={{color:'violet'}}>
                <tr>
                    <th>Emp ID</th>
                    <th>Emp Name</th>
                    <th>Emp Salary</th>
                    <th>Emp Image</th>
                </tr>
            </thead>
            <tbody style={{color:'green'}}>
                {
                    employees.map((obj,index)=>{
                        return (<tr key={index} style={{alignItems:'center',justifyContent:'center'}}>
                            <td>{obj.e_id}</td>
                            <td>{obj.e_name}</td>
                            <td className='fa fa-dollar'>{obj.e_sal}</td>
                            <td><img src={obj.e_img} alt="Error" width={50}  /></td>
                        </tr>)
                    })
                }
            </tbody>
            <tfoot style={{alignItems:'center',justifyContent:'center',color:'red'}}><p >Thank You!!!</p></tfoot>
        </table>
    </div>
  )
}

export default State

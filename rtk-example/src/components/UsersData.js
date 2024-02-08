import React,{useState} from 'react';
import { Input,Button,Flex,Tooltip} from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import { useSelector,useDispatch } from 'react-redux';
import { addUser,deleteUser,updateUser } from '../redux/UserSlice';

const UsersData = () => {
    const[input,setInput]=useState('');
    const[id,setId]=useState(null);
    const users=useSelector(state=>state.data.users);
    const dispatch=useDispatch();
  return (
    <div>
        <h3>Add user Data</h3>
        <Input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Something' style={{width:"300px"}}></Input>
        <Button onClick={()=>{
            if(id)
            {
                dispatch(updateUser({ind:id,name:input}));
                setId(null);
                setInput('');
            }else{
            dispatch(addUser(input));
            setInput('')
            }
            }} type='primary'>{id?"update":"Add"}</Button>
        {users.map((user,index)=>(
            <div>
                <h3>{user}
                <Button type='primary' onClick={()=>{
                    setId(index);
                    setInput(users[index])
                }} >Edit</Button>
                 <Button onClick={()=>dispatch(deleteUser({ind:index}))} type='primary' danger>Delete</Button></h3>
            </div>
        ))}
     <br/>
     {/* <Flex gap='small' vertical>
          <Flex wrap='wrap' gap='small'>
            <Tooltip title='search'>
                <Button type='primary' icon={<SearchOutlined/>}></Button>
            </Tooltip>
            <Button type='primary' >A</Button>
            <Button type='primary' icon={<SearchOutlined/>}>Search</Button>
            <Button type='primary' loading>Loading</Button>
          </Flex>
     </Flex> */}
    </div>
  )
}

export default UsersData
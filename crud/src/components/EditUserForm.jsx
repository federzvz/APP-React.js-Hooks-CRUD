import React from 'react';
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        //console.log(data)
        //props.addUser(data);
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)

        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" 
            {...register('name', { required: {value: true , message: "Name Requerido"}})}
            />
            <div>{errors?.name.message}</div>
            <label>Username</label>
            <input type="text" name="username" 
            {...register('username', { required: {value: true , message: "Username Requerido"}})}
            />
            <div>{errors?.username.message}</div>
            <button>Edit User</button>
        </form>
     );
}
 
export default EditUserForm;

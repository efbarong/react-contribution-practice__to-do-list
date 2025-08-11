import {useForm} from 'react-hook-form';
import { DrawTask } from './DrawTask';

export function CreateTask() {
  const {register, handleSubmit} = useForm();

  function info(data){
    <p>{data.newTask}</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(info)}>
        <input type="text" {...register("newTask")} placeholder='Create new task' />
        <button type="submit">Create task</button>
      </form>
    </div>
  );
}

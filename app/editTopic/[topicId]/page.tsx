import EditTopicForm from '../../../components/EditTopicForm'

const url = process.env.NEXT_PUBLIC_URL;

const getTopicId = async (id) => {
  
  try {
    const response = await fetch(`${url}/api/topics/${id}`, { cache: "no-store"});
    
    if(!response.ok){
      throw new Error('Failed to fetched topic id');
    }

    return response.json();

  } catch (error) {
      console.log(error);
  }
}

const EditTopic = async ({params}) => {
  const { topicId } = params;
  const { topic } = await getTopicId(topicId);//destructure by id
  const { title, description } = topic;

  return (
        <EditTopicForm 
        id={topicId}
        title={title}
        description={description}
        />
  
  )
}

export default EditTopic
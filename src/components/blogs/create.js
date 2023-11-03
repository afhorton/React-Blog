import {useState} from 'react';
import fb from "../firebase";
const db = fb.firestore()
const Blogs = db.collection("blogs");

const CreateBlog= () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState("");

    const sub = (e) => {
        e.preventDefault();
        // Add data to the store
        Blogs.add({
            Title: title,
            Body: body,
            publish: false,
            publish_on: fb.firestore.Timestamp.fromDate(new Date())
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        });
    }
    return (
        <div>
            <form onSubmit={(event) => {sub(event)}}>
                <input type="text" placeholder="Title"
                onChange={(e) => {setTitle(e.target.value)}} required />
            <textarea name="content" type="text" placeholder="write your content here."
            rows="10" cols="150" onChange={(e) => {setBody(e.target.value)}} required></textarea>

            <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default CreateBlog;
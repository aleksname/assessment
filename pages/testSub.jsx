import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function MessageForm() {
    const messageRef = useRef();
    const ref = collection(firestore, 'message');

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        };

        try {
            await addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <form onSubmit={handleSave}>
                <label htmlFor="message">Enter Message</label>
                <input id="message" type="text" ref={messageRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

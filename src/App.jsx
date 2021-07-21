import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

const App = () =>{

    const [addItem, setAdditem] = useState([]);

    const addNote = (note) =>{
        setAdditem((prevData) =>{
            return [...prevData, note];
        })
    }

   const onDelete = (id) =>{
    setAdditem((oldData) =>
        oldData.filter((currdata, indx) =>{
            return indx !== id;
        })
    )
   };
   
    return(
        <>
        <Header />
        <CreateNote 
            passNote ={addNote}
        />

        {addItem.map((val, index)=>{
            return <Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem = {onDelete}
            />
        })}

        <Footer />   
        </>
    )
}
export default App;
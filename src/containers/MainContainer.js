import { Fragment, useEffect, useState} from "react";
import List from '../components/List';
import Contact from '../containers/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "../components/CardDetails";


const MainContainer = () => {
    const [state, setState] = useState({loading:true, error:false, cardList:[]});
 


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const cardList = await response.json();
            setState ({ loading: false, error: false, cardList});
          } catch (error) {
            setState({loading: false, error: false, cardList: []});
          }
        };
    
        fetchData();
      }, []);

      const handleDelete = async (id) => {
        try {
          const response = await fetch(`https://65f89044df151452460fb148.mockapi.io/api/v1/contacts/${id}`, {
            method: 'DELETE',
          });
          if (!response.ok) {
            throw new Error('Failed to delete card');
          }
          // Update the list after successful deletion
          setState((prevState) => ({
            ...prevState,
            cardList: prevState.cardList.filter((card) => card.id !== id),
          }));
        } catch (error) {
          console.error('Error deleting card:', error);
        }
      };

if (state.loading) return <div>Loading...</div>;
if (state.error) return <div>Error!</div>;




// return state.cardList.length === 0
// ? <div>Empty</div>
// :

return(
  <Router>
    <Routes>
      <Route path="/" element={<List cardList={state.cardList} onDelete={handleDelete}  ></List>} />
      <Route path="/card/:id" element={<CardDetails onDelete={handleDelete}/>} />
    </Routes>
  </Router>
);

};

export default MainContainer;
import './App.css';
import Box from '@mui/material/Box';

import Search from './components/Search';
import TextArea from './components/TextArea';
import List from './components/List';
function App() {
  return (
    <div >
      <Box sx={{
        display:"flex", 
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
       
      }}>
      <Search/>
      <TextArea/>
      <List  />
      </Box>
    </div>
  );
}

export default App;

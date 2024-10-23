// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Auth/home'; 
// import Register from './components/Auth/register';
// import Login from './components/Auth/login'; 
// import Footer from './components/Layout/footer';
// import Header from './components/Layout/header'; 
// import TaskForm from './components/taskForm'; 

// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header /> 
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />}/>
//             <Route path="/create-task" element={<TaskForm />} /> 
//           </Routes>
//         </main>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the Redux store
import Home from './components/Auth/home';
import Register from './components/Auth/register';
import Login from './components/Auth/login';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList'; // Add TaskList component
import TaskItem from './components/taskItem'; // Add TaskItem component
import Header from './components/Layout/header';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap the app in the Provider and pass the store */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/tasks" element={<TaskList />} /> {/* Task List */}
              <Route path="/tasks/:id" element={<TaskItem />} /> {/* Task Item */}
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


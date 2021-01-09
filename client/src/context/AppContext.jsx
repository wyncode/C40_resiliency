import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [search, setSearch] = useState('');
  const [currentFilter, setCurrentFilter] = useState(null);
  const [token, setToken] = useState('');

  const [loading, setLoading] = useState(false);

  const user = sessionStorage.getItem('user');
  useEffect(() => {
    const getToken = async () => {
      const resp = await axios.get('/GoogleAPI');
      setToken(resp.data);
    };
    try {
      getToken();
    } catch (error) {
      console.log(error);
    }
  }, [setToken]);

  return (
    <AppContext.Provider
      value={{
        token
      }}
    >
      {children}
    </AppContext.Provider>
  );
  useEffect(() => {
    //incase the user refreshes & context is cleared
    if (user && !currentUser) {
      axios
        .get('/api/users/me', { withCredentials: true })
        .then((res) => setCurrentUser(res.data))
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        requests,
        setRequests,
        filteredRequests,
        setFilteredRequests,
        search,
        setSearch,
        currentFilter,
        setCurrentFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

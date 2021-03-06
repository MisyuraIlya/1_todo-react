// Global
import { createContext, useState, useContext, useEffect } from 'react';
// Local
import apiTodo from '../lib/apiTodo';
import apiSubTodo from '../lib/apiSubTodo';
import { TODO_STATUS } from '../lib/enums';

// Defines
const HistoryContext = createContext();

// React hook
const useHistory = () => {
  const context = useContext(HistoryContext)
  if (!context) {
    throw new Error('Can not run without "HistoryProvider"');
  }
  return context;
}

const HistoryProvider = (props) => {
  // state
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [subTodo, setSubTodo] = useState([]);
  const [page, setPage] = useState(0);
  const [paginationTotal, setPaginationTotal] = useState(null);
  const [paginationLimit, setPaginationLimit] = useState(null);
  const [paginationTotalPages, setPaginationTotalPages] = useState(0)
  const [error, setError] = useState({ isError: false, message: '' });

  // Helpers
  const loadHistory = async () => {
    setLoading(true);
    try {
      const { data, limit, total } = await apiTodo.read({ page, status: TODO_STATUS.DONE });
      setHistory(data);
      const  dataSubHistory  = await apiSubTodo.read();
      setSubTodo(dataSubHistory);
      setPaginationTotal(total);
      setPaginationLimit(limit);
      const totalPages = Math.ceil(total / limit);
      setPaginationTotalPages(totalPages)
    } catch (error) {
      console.error('[state/history/loadHistory] Failed to load posts', { error });
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  const onPageChange = async (page) => {
    setPage(page);
  }

  useEffect(() => loadHistory(), []);
  useEffect(() => loadHistory(), [page]);

  // Exports
  const methods = {
    onPageChange,
    loadHistory
  };
  const value = {
    loading,
    history,
    paginationTotal,
    paginationLimit,
    paginationTotalPages,
    error,
    page,
    methods,
    subTodo
  };

  return (<HistoryContext.Provider value={value} {...props} />);
};

export { useHistory, HistoryProvider };
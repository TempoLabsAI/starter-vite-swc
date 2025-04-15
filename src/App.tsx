import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import routes from 'tempo-routes';
import supabase from './lib/supabaseClient';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('todos').select('*');
        if (error) {
          throw error;
        }
        setTodos(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path=""
            element={
              <div>
                <h1>My Todos</h1>
                {loading ? (
                  <p>Loading todos...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : todos.length === 0 ? (
                  <p>No todos found.</p>
                ) : (
                  <ul>
                    {todos.map((todo) => (
                      <li key={todo.id}>{todo.task}</li>
                    ))}
                  </ul>
                )}
              </div>
            }
          />
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

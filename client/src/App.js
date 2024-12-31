// App.js
// Path: /client/src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // HTTP client to interact with the backend

function App() {
  const [subscriptions, setSubscriptions] = useState([]); // State to store subscriptions
  const [newSubscription, setNewSubscription] = useState({
    name: '',
    service: '',
    renewalDate: '',
  });

  // Fetch subscriptions from the backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/subscriptions') // API endpoint to fetch subscriptions
      .then((response) => {
        setSubscriptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching subscriptions:', error);
      });
  }, []);

  // Handle form submission to add a new subscription
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/subscriptions', newSubscription) // API endpoint to add a new subscription
      .then((response) => {
        setSubscriptions([...subscriptions, response.data]);
        setNewSubscription({
          name: '',
          service: '',
          renewalDate: '',
        });
      })
      .catch((error) => {
        console.error('Error adding subscription:', error);
      });
  };

  return (
    <div className="App">
      <h1>Subscription Renewal Reminder</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newSubscription.name}
          onChange={(e) => setNewSubscription({ ...newSubscription, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Service"
          value={newSubscription.service}
          onChange={(e) => setNewSubscription({ ...newSubscription, service: e.target.value })}
        />
        <input
          type="date"
          value={newSubscription.renewalDate}
          onChange={(e) => setNewSubscription({ ...newSubscription, renewalDate: e.target.value })}
        />
        <button type="submit">Add Subscription</button>
      </form>

      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map((subscription) => (
          <li key={subscription._id}>
            {subscription.name} - {subscription.service} - {new Date(subscription.renewalDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

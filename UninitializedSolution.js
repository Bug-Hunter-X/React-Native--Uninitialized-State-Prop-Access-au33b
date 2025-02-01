import React, { useState, useEffect } from 'react';

const UninitializedSolution = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data?.title ?? 'No title available'}</Text> 
      <Text>{data?.completed ? 'Completed' : 'Not completed'}</Text>
    </View>
  );
};

export default UninitializedSolution;
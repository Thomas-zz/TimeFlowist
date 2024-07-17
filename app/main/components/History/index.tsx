import React from 'react';

interface HistoryItem {
  id: number;
  title: string;
  date: string;
}

const History: React.FC = () => {
  const historyList: HistoryItem[] = [
    { id: 1, title: 'Event 1', date: '2022-01-01' },
    { id: 2, title: 'Event 2', date: '2022-02-01' },
    { id: 3, title: 'Event 3', date: '2022-03-01' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2>History</h2>
      <ul>
        {historyList.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
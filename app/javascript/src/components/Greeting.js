import { useSelector } from 'react-redux';
import React from 'react';

export default function Greeting() {
  const { message, isLoading } = useSelector((store) => (store.message));
  const txt = isLoading ? 'Loading' : message;
  return (
    <div className="container mx-auto text-center mt-auto">
      <p>{txt}</p>
      <span className="text-[10px]">A message from API</span>
    </div>
  );
}

import React, { lazy, Suspense } from "react";
import "./App.css";

const IncrementButton=lazy(()=> import('./IncrementButton'));

function App() {

  return (
    <div class="App">
      <Suspense fallback={<h1 className="Loading">Saving counter value...</h1>}>
        <IncrementButton/>
      </Suspense>
    </div>
  );
}

export default App;
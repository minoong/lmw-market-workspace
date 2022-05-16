import Header from '@components/common/layout/Header'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Foo } from '@monorepo/commons'

function App() {
 return (
  <div className="min-h-screen">
   <Foo />
   <Header />
   <Routes>
    <Route path="/" element={<div>hi</div>}>
     <Route index element={<div>index</div>} />
    </Route>
    <Route path="/teams" element={<div>teams</div>}>
     <Route path=":teamId" element={<div>:teamId</div>} />
     <Route path="new" element={<div>new</div>} />
     <Route index element={<div>LeagueStandings</div>} />
    </Route>
   </Routes>
  </div>
 )
}

export default App

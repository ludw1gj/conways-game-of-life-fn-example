import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import GameOfLifeView from './views/GameOfLifeView'
import HomeView from './views/HomeView'
import NotFoundView from './views/NotFoundView'

function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/game-of-life" element={<GameOfLifeView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter

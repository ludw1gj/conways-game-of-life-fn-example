import { Box } from '@chakra-ui/react'
import { paintCanvas } from '@ludw1gj/game-of-life-fn'
import { GameConfig } from '@ludw1gj/game-of-life-fn'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { GameOfLifeForm } from './HomeView'

const GameOfLifeView = () => {
  const location = useLocation()
  const canvasEl = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasEl.current!
    const locationState = location.state as GameOfLifeForm | undefined

    const config: GameConfig = {
      canvas,
      framesPerSecond: locationState?.framesPerSecond || 10,
      gridDimension: {
        numRows: locationState?.numRows ?? 50,
        numCols: locationState?.numCols ?? 50,
      },
      painterOptions: {
        ctx: canvas.getContext('2d')!,
        cellSize: 18,
        padding: 10,
      },
    }
    const interupt = paintCanvas(config)

    return () => interupt()
  }, [])

  return (
    <Box width="100%" height="100%" paddingTop="20px">
      <canvas id="canvas" ref={canvasEl} style={{ margin: 'auto' }} />
    </Box>
  )
}

export default GameOfLifeView

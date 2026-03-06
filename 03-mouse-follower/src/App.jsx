import { useEffect, useState } from "react";

const FollowMouse = () => {
  const[enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
    <div style={{
      position: 'absolute',
      border: '1px solid #fff',
      opacity: 0.8,
      left: -25,
      top: -25,
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      pointerEvents: 'none',
      transform: `translate(${position.x}px, ${position.y}px)`
    }} 
    />
    <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
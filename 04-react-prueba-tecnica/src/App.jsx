import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  
  // El hook useEffect nos permite ejecutar código de forma secundaria a la renderización del componente, 
  // es decir, podemos ejecutar código después de que el componente se haya renderizado. 
  // En este caso, queremos ejecutar el código para obtener un dato aleatorio de un gato 
  // después de que el componente se haya renderizado por primera vez. 
  // Para ello, le pasamos un array vacío como segundo argumento al hook useEffect, 
  // lo que indica que el efecto solo se ejecutará una vez, cuando el componente se monte por primera vez.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        const encodedText = encodeURIComponent(threeFirstWords)


        fetch(`https://cataas.com/cat/says/${encodedText}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => { 
          const { url } = response

          const finalUrl = url.startsWith('http')
            ? url
            : `${CAT_PREFIX_IMAGE_URL}${url}`
          setImageUrl(finalUrl)
        })
        .catch(error => {
          console.error('Error fetching cat image:', error)         
        })

      })

    
  }, []) // Cada vez que  se renderice el componente se ejecuta el efecto, pero como le pasamos un array vacío, 
         // solo se ejecutará la primera vez que se renderice el componente

  return(
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '2rem',
      padding: '0 1rem',
      textAlign: 'center'
    }}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && 
        <img 
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`} 
        />
      }
    </main>
  )
}

export default App
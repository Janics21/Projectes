import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
  
    useEffect(() => {
      if (!fact) return
  
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
    }, [fact])
  
    return { imageUrl }
  }
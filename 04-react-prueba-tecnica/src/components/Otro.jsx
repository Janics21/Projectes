import { useCatImage } from "../hooks/useCatImage"

export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'Random fact' })

    return (
        <div>
            {imageUrl && <img src={imageUrl} alt="Random cat" />}
        </div>
    )
}
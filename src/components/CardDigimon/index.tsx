import { Container, Image } from './style'
import Button from '../Button'

interface Digimon {
    name: string,
    level: string,
    img: string
}

interface CardDigimon {
    digimon: Digimon,
    isFavoritList?:Boolean,
    func2?: (digimon:Digimon) => void,
    handleRemove?: (digimon:Digimon) => void
}

const CardDigimon = ({ digimon, func2, isFavoritList, handleRemove }:CardDigimon) => {
    const { name, level, img } = digimon

    return (
        <Container>
            <div>{name}</div>
            <Image src={img} alt="Digimon Photo" />
            <div>{level}</div>
            {isFavoritList && isFavoritList ? (
                <Button deleted={true} onClick={() => handleRemove && handleRemove(digimon)} >
                    Remove
                </Button>
            ) : (
                <Button onClick={() => func2 && func2(digimon)}>Add</Button>
            )}
        </Container>
    )
}

export default CardDigimon
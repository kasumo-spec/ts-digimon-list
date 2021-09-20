import CardDigimon from '../CardDigimon'

interface Digimon {
    name: string,
    level: string,
    img: string
}

interface DigimonList {
    digimons: Digimon[],
    isFavoritList?:Boolean,
    func?: (digimon:Digimon) => void,
    handleRemove?: (digimon:Digimon) => void
}

const DigimonList = ({ digimons, func, isFavoritList, handleRemove }:DigimonList) => {
    return (
        <>
            {digimons && digimons.map((digimon) => (
                <CardDigimon
                    digimon={digimon}
                    func2={func}
                    isFavoritList={isFavoritList}
                    handleRemove={handleRemove}
                />
            ))}
        </>
    )
}

export default DigimonList